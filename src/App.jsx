import { useState } from "react";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ExtraServices from "./pages/ExtraServices";


import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );

  function handleLogout() {
    localStorage.removeItem("isAdminLoggedIn");    
    window.location.href = "/";
  }

  return (
    <>
      {page === "home" && (
        <Home 
          goBooking={() => setPage("booking")}
          goExtraServices={() => setPage("extraServices")}
          goContact={() => setPage("contact")}
          goAdmin={() => setPage(isAdminLoggedIn ? "admin" : "adminLogin")}
          goHome={() => setPage("home")}
          isAdminLoggedIn={isAdminLoggedIn}
          handleLogout={handleLogout}
        />
      )}

      {page === "booking" && (
        <Booking 
          goHome={() => setPage("home")}
          goExtraServices={() => setPage("extraServices")}
          goAdmin={() => setPage(isAdminLoggedIn ? "admin" : "adminLogin")}
          isAdminLoggedIn={isAdminLoggedIn}
          handleLogout={handleLogout}
        />
      )}

      {page === "extraServices" && (
        <ExtraServices 
          goHome={() => setPage("home")} 
          goExtraServices={() => setPage("extraServices")}
          goContact={() => setPage("contact")}
          goAdmin={() => setPage(isAdminLoggedIn ? "admin" : "adminLogin")}
          isAdminLoggedIn={isAdminLoggedIn}
          handleLogout={handleLogout}
        />
      )}


      {page === "contact" && (
        <Contact goHome={() => setPage("home")} />
      )}
    </>
  );
}

export default App;