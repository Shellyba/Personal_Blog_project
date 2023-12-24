import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {PostCard} from "../components/post_card";
import "../css/home.css";
import "../css/postcard.css";


/* Using the useContext hook function I have access to the blog posts array (from the
global posts-provider component).
I drill down the first 3 posts to the postcard component in order to display these posts
in the Home page as latest posts.*/

export function Home() {
    const {postsArray} = useContext(PostsContext);
    const latestPosts = postsArray.slice(0, 3);

    return (
        <div className="page">
            <div className="home-hero">
                <div className="content-container">
                    <h1 className="title">The NeuroVet Blog </h1>
                    <p className="subtitle"> Whether you're a dedicated pet parent seeking insights into your furry
                        friend's neurological well-being
                        or a fellow veterinary professional eager to delve into the intricacies of the nervous system,
                        you've arrived to the right place.</p>
                </div>
                <img className="home-img" src="../Pictures/brain.png" alt="picture"/>
            </div>

            <div className="content">
                <div className="content-container">
                    <div className="section" id="daily-digest">
                        <div className="section-header">
                            <div className="section-title">Latest posts</div>
                        </div>
                        <div>
                            {latestPosts.map((post) => <PostCard postItem={post}/>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}