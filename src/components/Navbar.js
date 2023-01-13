import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-gray-300">
            <div className="flex-1">
                <span className="btn btn-ghost normal-case text-xl">Ahmad Muzaki SA</span>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>Indomie</li>
                    <li>gord</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
