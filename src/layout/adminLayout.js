import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/rent-wheels-logo.png'

function AdminLayout() {
    return (
        <>
            <div style={{ height: "100%" }}>
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#113153b4", shadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
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
                                    {/* user icon */}
                                    <i className="fas fa-user"></i>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* sidebar and body */}
                <div style={{ display: "flex" }}>
                    <nav style={{ width: "20%", backgroundColor: "#4aa390", padding: "1rem", height: "100vh" }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginBottom: "1rem", fontWeight: 600, borderBottom: "1px solid white", paddingBottom: "1rem" }}>
                                <Link to="/admin"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li style={{ marginBottom: "1rem", fontWeight: 600, borderBottom: "1px solid white", paddingBottom: "1rem" }}>
                                <Link to="/admin/cars"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Cars
                                </Link>
                            </li>
                            <li style={{ marginBottom: "1rem", fontWeight: 600, borderBottom: "1px solid white", paddingBottom: "1rem" }}>
                                <Link to="/admin/cars/add"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: 600
                                    }}
                                >
                                    Add Car
                                </Link>
                            </li>
                        </ul>
                    </nav>


                    <main>
                        <Outlet />
                    </main>

                </div>
            </div >
        </>
    )
}

export default AdminLayout