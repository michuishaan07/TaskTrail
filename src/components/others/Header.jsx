import React from 'react';

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem('loggedInUser'); // clean removal
    props.changeUser('');
  };

  return (
    <div className='flex items-center justify-between p-5 bg-black'>
      {/* Logo on the left */}
      <div className='flex items-center gap-3'>
      <img
  src="src/assets/logo.png"
  alt="Task Manager Logo"
  className="h-29 w-26 rounded"
/>

    
      </div>

      {/* Logout button on the right */}
      <button
        onClick={logout}
        className='bg-red-600 px-4 py-2 rounded-xl text-white hover:bg-red-700'
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
