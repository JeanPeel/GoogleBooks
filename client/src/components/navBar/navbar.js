import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <span className='navbar-brand mb-0 h1'>Google Books</span>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'
                ></button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <button
                                href='#'
                                className='nav-item btn btn-outline-light mb-0 mr-3'
                            >
                                Search <span className='sr-only'>(current)</span>
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button
                                href='#'
                                className='nav-item btn btn-outline-light mb-0 text-white'
                            >
                                Saved
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}