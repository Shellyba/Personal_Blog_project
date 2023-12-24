import React, {createContext, useEffect, useState} from "react";

export const PostsContext = createContext(null);

export function PostProvider({children}){

    const [postsArray, setPostsArray] = useState([]);

    const getDatesArray = (startDate, endDate) => {
        let dates = [];
        // let currentDate = new Date(startDate);
        while (startDate <= endDate) {
            dates.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 10);
        }
        return dates;
    };

    const datesArray = getDatesArray(new Date(2023, 5, 1), new Date())

    const categoriesArray = ["Brain", "Spinal cord", "Vestibular", "Epilepsy", "Neurodegenerative", "Inflammation"]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const addPost = (newPost) =>
        setPostsArray([newPost,...postsArray])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const shortPostsArr = json.slice(0, 21);
                for(let i=0; i<datesArray.length; i++) {
                    shortPostsArr[i].date = datesArray[i].toJSON().split('T')[0];
                    shortPostsArr[i].category = categoriesArray[getRandomInt(categoriesArray.length)]
                }
                setPostsArray(shortPostsArr.reverse());
            });
    }, []);

    console.log(postsArray)

    const removePost = (postTitle) => {
        setPostsArray(postsAfterDel => {
            return postsAfterDel.filter(item => item.title !== postTitle)
        })
    }

    const getPostIndex = (postId) => {
        return postsArray.findIndex((post) => String(post.id) === (postId))}


    const getPostById = (postId) => {
        return postsArray.find(post => String(post.id) === postId);
    }

    const postsValuesToProvider = {postsArray, addPost, removePost, getPostIndex, getPostById, setPostsArray}

    return(
        <PostsContext.Provider  value={postsValuesToProvider}>
            {children}
        </PostsContext.Provider>
    )
}