import React from 'react'

function Nav() {
    const logout = async () => {
        await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        window.location.href = '/login'
    }
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
                                <a href="index.html">
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
                                    <li className="active">
                                        <a href="index.html" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="listing.html" className="nav-link">
                                            Cars
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonials.html" className="nav-link">
                                            Reservations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="nav-link">
                                            Customers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="nav-link">
                                            Offices
                                        </a>
                                    </li>
                                    <li>
                                        <input type = "button" value = "logout" onClick={logout} className="nav-link"/>
                                            

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