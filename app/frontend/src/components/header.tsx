import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">WhenWeWork</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><a>Sign out</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;

