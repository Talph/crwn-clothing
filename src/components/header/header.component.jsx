import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/dripholic.svg'
import './header.styles.scss';

const Header = ({currentUser}) =>(
    <div className="header">
<Link className="logo-container" to="/">
<Logo className="logo"/>
</Link>

<div className="options">
    <Link className="option" to="/shop">
Shop
    </Link>
    <Link className="option" to="/contact">
Contact
    </Link>
    {
        currentUser ? 
        <Link className="option" onClick={()=>auth.signOut()}>
            Sign Out
            </Link>
        :
        <Link className="option" to="/signin">Sign In</Link>
    }
</div>
    </div>
)

export default Header;