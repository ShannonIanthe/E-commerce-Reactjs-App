import React from 'react'

export default function Header() {
    return  (
        <nav>
            <div className="logo">Rayes.</div>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About US</li>
                <li>Contact</li>
            </ul>
            <div className = "search">
                <i className="fas fa-search"></i>
                <i className= "fas fa-shopping-basket"></i>
            </div>
        </nav>
    )
}

