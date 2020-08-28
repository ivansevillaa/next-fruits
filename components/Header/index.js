import React from 'react';
import Navbar from '@components/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />

      <style jsx>{`
        header {
          height: 68px;
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        }
      `}</style>
    </header>
  )
}

export default Header;