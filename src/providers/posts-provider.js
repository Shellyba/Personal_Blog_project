import React, {createContext, useEffect, useState} from "react";

export const PostsContext = createContext(null);

export function PostProvider({children}){

    const [postsArray, setPostsArray] = useState([]);

    function generateRandomDate(from, to) {
        return new Date(
            from.getTime() +
            Math.random() * (to.getTime() - from.getTime()),
        );
    }

    const addPost = (newPost) =>
        setPostsArray([newPost,...postsArray])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const newPostsArr = json.map(post =>
                    ({...post, date : generateRandomDate(new Date(2023, 1, 1), new Date()).toJSON().split('T')[0]}));
                    setPostsArray(newPostsArr)
            });
    }, []);

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