function Navbar({ 
    goHome, 
    goExtraServices,
    goAdmin,
    isAdminLoggedIn,
    handleLogout,
}) {
    return (
        <nav className="navbar">
            <h2 className="logo">Medellin Transportation Services</h2>

            <ul className="nav-links">
                <li onClick={goHome}>Home</li>
                <li onClick={goExtraServices}>Extra Services</li>
                
            </ul>
        </nav>
    );
}

export default Navbar;