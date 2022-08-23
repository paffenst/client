import { Link } from 'react-router-dom';
import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary painting menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
            <Link to="/" className="item">
            All Streams
            </Link>
            <GoogleAuth /> 
            </div>
        </div>
    )
}
  
export default Header;