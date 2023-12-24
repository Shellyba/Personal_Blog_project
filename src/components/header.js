import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/user-provider";
import "../css/header.css";

// Creating the links to the blog pages using the <Link> tag from react router lib.
// This tag enables the routing between pages without page refresh.
// In addition, I used the hook function useContext to get global information on the user (if sign-in/out)
// to display the Admin link.
export function Header() {
    const {user, signIn, signOut} = useContext(UserContext);

    return (
        <div className="header">
            <div className="header-container flex-md-row">
                <div className="logo">
                    <Link className='nav-link logo-button' to="/"><img src="./Pictures/logo2.png"/></Link>
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
                                <button className="sign-in-button" onClick={signOut}>Sign out</button>
                            </div>
                            : (<button className="sign-in-button" onClick={signIn}>Sign in</button>)}
                    </nav>
                </div>
            </div>
        </div>
    );
}



