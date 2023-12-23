import {Link} from "react-router-dom";
import "../css/header.css";
import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {UserContext} from "../providers/user-provider";

export function Header() {

    const {user, signIn, signOut} = useContext(UserContext);

    return (

        <div className="header">
            <div className="header-container flex-md-row">
                <div className="logo">
                  <Link className='nav-link' to="/"><img src="./Pictures/logo2.png"/></Link>
                </div>
                <div className="navigation-wrapper">
                    <nav className="navigation">
                        <li><Link className='nav-link' to="/">Home</Link></li>
                        <li><Link className='nav-link' to="/about">About</Link></li>
                        <li><Link className='nav-link' to="/posts">Posts</Link></li>
                        <li><Link className='nav-link' to="/contact">Contact</Link></li>
                        {user && <li><Link className='nav-link' to="/admin">Admin</Link></li>}
                        {user ? <div className="user-welcome">
                                <span className="signed-in">Welcome {user.userName}</span>
                                <button className="sign-out-button" onClick={signOut}>Sign out</button>
                                </div>
                             : (<button className="sign-in-button" onClick={signIn}>Sign in</button>)}
                    </nav>
                </div>
            </div>
        </div>
    )}



