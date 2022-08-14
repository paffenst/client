import { Link } from 'react-router-dom';
import React from 'react';

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
            </div>
        </div>
    )
}
  
export default Header;