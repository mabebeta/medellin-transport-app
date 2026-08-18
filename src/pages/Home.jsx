import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

function Home({ goBooking, goExtraServices, goContact, goHome, goAdmin, isAdminLoggedIn, handleLogout }) {
    return (
        <>
            <Navbar 
                goHome={goHome}
                goExtraServices={goExtraServices}
                goAdmin={goAdmin}
                isAdminLoggedIn={isAdminLoggedIn}
                handleLogout={handleLogout}
            />

            <div className="hero">
                <h1>Private Transportation in Medellin</h1>

                <p>
                    Safe, reliable, and comfortable rides in Medellin,
                    Rionegro, airport transfers, leisure trips, and 
                    surrounding areas.
                </p>

                <div className="hero-buttons">
                    <button onClick={goContact} className="primary-btn">Book a Ride</button>
                </div>

            </div>

            <section className="why-us">
                <h2>Why Choose Us?</h2>

                <div className="why-us-grid">
                    <div className="why-card">
                        <h3>Safe & Reliable</h3>
                        <p>
                            Professional and dependable transportation for airport
                            rides, city travels, and custom destinations.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Comfortable Rides</h3>
                        <p>
                            Enjoy comfortable private transportation around Medellin,
                            El Poblado, Envigado, Rionegro, and more.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Flexible Routes</h3>
                        <p>
                            Need a custom destination? We offer personalized rides
                            depending on your transportation needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services-preview">
                <h2>Our Services</h2>

                <div className="services-grid">
                    <ServiceCard
                        title="City Rides"
                        description="Private rides within Medellin, El Poblado, Envigado, Laureles, Sabaneta, and nearby areas."
                    />

                    <ServiceCard
                        title="Airport Transfers"
                        description="Comfortable rides between Medellin and Jose Maria Cordova International Airport in Rionegro."
                    />

                    <ServiceCard 
                        title="Leisure & Custom Trips"
                        description="Flexible transportation for leisure rides, day trips, and longer destinations depending on your needs."
                    />
                </div>
            </section>

            <section className="contact-banner">
                <div>
                    <h2>Need a Ride in Medellin?</h2>
                    <p>
                        Contact us for airport rides, private city transportation, 
                        custom trips, and personalized routes.
                    </p>
                </div>

                <button onClick={goContact}>Contact Now</button>
            </section>

            <Footer />
        </>
    );
}

export default Home;