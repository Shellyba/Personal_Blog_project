import React, {createContext, useEffect, useState} from "react";

/*
This global component allows access to the fetched posts and relevant functions (addPost, removePost, getPostById)
from each blog page, using the functions "createContext" and "PostProvider".
 */
export const PostsContext = createContext(null);

export function PostProvider({children}) {

    // In order to render the UI with the updated postsArray, after fetching the posts, adding or deleting a post,
    // I'm using the useState hook function.
    const [postsArray, setPostsArray] = useState([]);

    /* The fetched posts don't have a date and category keys. In order to add these information
    for more realistic blog appearance I created dates and categories arrays.
    These keys were added to each post (lines 18-32). */
    const createDatesArray = (startDate, endDate) => {
        let dates = [];
        while (startDate <= endDate) {
            dates.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 10);
        }
        return dates;
    };

    const datesArray = createDatesArray(new Date(2023, 5, 1), new Date());
    const postCategoriesArray = ["Brain", "Spinal cord", "Vestibular", "Epilepsy", "Neurodegenerative", "Inflammation"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const addPost = (newPost) => setPostsArray([newPost, ...postsArray]);


    /* The useEffect hook function will run when the component is mounted, and the fetch method will
        run only once. I sliced the postsArray to get a shorter posts list in the posts page. */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const shortPostsArr = json.slice(0, 21);
                for (let i = 0; i < datesArray.length; i++) {
                    shortPostsArr[i].date = datesArray[i].toJSON().split('T')[0];
                    shortPostsArr[i].category = postCategoriesArray[getRandomInt(postCategoriesArray.length)];
                }
                setPostsArray(shortPostsArr.reverse());
            });
    }, []);

    const removePost = (postTitle) => {
        setPostsArray(postsAfterDel => {
            return postsAfterDel.filter(item => item.title !== postTitle);
        });
    }

    const getPostById = (postId) => {
        return postsArray.find(post => String(post.id) === postId);
    }

    // These functions and posts will be accessible to the blog pages (PostProvider children)
    const postsValuesToProvider = {postsArray, addPost, removePost, getPostById, setPostsArray};

    return (<PostsContext.Provider value={postsValuesToProvider}>
        {children}
    </PostsContext.Provider>
    );
}