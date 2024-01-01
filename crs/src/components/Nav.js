import React from 'react'

function Nav(props) {
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <header className="site-navbar site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-3">
                            <div className="site-logo">
                                <a href="/">
                                    <strong>CarRental</strong>
                                </a>
                            </div>
                        </div>
                        <div className="col-9  text-right">
                            <span className="d-inline-block d-lg-none">
                                <a href="#" className=" site-menu-toggle js-menu-toggle py-5 ">
                                    <span className="icon-menu h3 text-black" />
                                </a>
                            </span>
                            <nav
                                className="site-navigation text-right ml-auto d-none d-lg-block"
                                role="navigation"
                            >
                                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                    <li className={props.active}>
                                        <a href="/" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/add_car" className="nav-link">
                                            Add cars
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/reservation" className="nav-link">
                                            Reservations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/customer" className="nav-link">
                                            Customers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/office" className="nav-link">
                                            Offices
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="nav-link">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Nav