import React from 'react';

const Header = (props) => {
  const username = props.data?.firstName || 'Admin';

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  }
  return (
    <div className='flex items-center justify-between'>
      <h1>
        Hello <br />
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;