import { useState } from "react";
import Home from "./pages/Home";
import ExtraServices from "./pages/ExtraServices";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Home 
          goBooking={() => setPage("contact")}
          goExtraServices={() => setPage("extraServices")}
          goContact={() => setPage("contact")}
          goHome={() => setPage("home")}
        />
      )}

      {page === "extraServices" && (
        <ExtraServices 
          goHome={() => setPage("home")} 
          goExtraServices={() => setPage("extraServices")}
          goContact={() => setPage("contact")}
        />
      )}

      {page === "contact" && (
        <Contact goHome={() => setPage("home")} />
      )}
    </>
  );
}

export default App;