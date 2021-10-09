import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle="text-white text-decoration-none px-3"
       
  return (
    <>
      <Button variant="outline-secondary">Secondary</Button>
      <div className="bg-secondary text-center p-4 mb-5">

        <Link className={linkStyle} to="/home">Home</Link>
        <Link className={linkStyle} to="/about">About</Link>
        <Link  className={linkStyle}  to="/restaurants">Restaurants</Link>
        
      </div>
      

      </>
    );
};

export default Header;