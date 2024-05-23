import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/rent-wheels-logo.png'

function Layout() {
    return (
        <>
            <div style={{ height: "100%" }}>
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#4aa390" }}>
                    <div>
                        <img src={logo} alt="" style={{ width: "250px" }} />
                    </div>
                    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "20%" }}>
                        <ul style={{ listStyleType: 'none', padding: 0, display: "flex", width: "100%", justifyContent: "space-between" }}>
                            <li>
                                <Link to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Admin
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>


                <main>
                    <Outlet />
                </main>

                {/* convert rgb to hex: rgb(19 52 83) */}


                <footer style={{
                    width: "100%",
                    backgroundColor: "#133453",
                    textAlign: "center",
                    color: "white",
                    padding: "14px 0",
                    fontWeight: 600
                }}>
                    <p>&copy; 2021</p>
                </footer>
            </div >
        </>
    )
}

export default Layout



