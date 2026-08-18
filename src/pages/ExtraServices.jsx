import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function ExtraServices({ goHome, goContact, goExtraServices, goAdmin, isAdminLoggedIn, handleLogout }) {
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = {
        dining: {
            title: "Fine Dining",
            description: "Elegant restaurants for dates, business dinners, or premium nights out.",
            price: "$$$",
            reservation: "Reservation recommended",
        },
        rooftops: {
            title: "Rooftops",
            description: "Great views, cocktails, music, and nightlife vibes around Medellin.",
            price: "$$ - $$$",
            reservation: "Reservation recommended on weekends",
        },
        coffee: {
            title: "Coffee Shops",
            description: "Study spots, specialty coffee, quiet cafes, and local coffee experiences.",
            price: "$ - $$",
            reservation: "Usually no reservation needed",
        },
        nightlife: {
            title: "Nightlife",
            description: "Reggaeton clubs, techno venues, rooftop bars, Provenza nighlife, and VIP tables.",
            price: "$$ - $$$$",
            reservation: "Recommended for VIP access",
        },
        comuna13: {
            title: "Comuna 13",
            description: "Street art, history, dancing, music, local food, and cultural tours.",
            price: "$ - $$",
            reservation: "Optional guided tours available",
        },
        vip: {
            title: "VIP Experiences",
            description: "Luxury experiences including helicopters, boat rentals, private drivers, exclusive dining, and premium nightlife.",
            price: "$$$ - $$$$",
            reservation: "Required",
        },
        shopping: {
            title: "Shopping",
            description: "Malls, boutiques, luxury stores, local fashion, and gift shopping around Medellin.",
            price: "$ - $$$$",
            reservation: "Not required",
        },
    };

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const requestInfo = {
            experience: selectedExperience.title,
            ...formData,
        };

        console.log("Request sent:", requestInfo);

        alert("Request sent! We will contact you soon.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setShowForm(false);
    }

    return (
        <>
            <Navbar
                goHome={goHome}
                goExtraServices={goExtraServices}
                goContact={goContact}
                goAdmin={goAdmin}
                isAdminLoggedIn={isAdminLoggedIn}
                handleLogout={handleLogout}
            />

            <div className="extra-page">

                <section className="extra-hero">
                    <h1>Discover Medellin Like a Local</h1>
                    <p>
                        Restaurants, nightlife, tours, reservations, and custom experiences
                        planned around your taste, budget, and vibe.
                    </p>

                    <button onClick={goContact} className="primary-btn">
                        Contact Us
                    </button>

                    <button onClick={goHome} className="secondary-btn">
                        Back Home
                    </button>
                </section>


                <section className="extra-section">
                    <h2>What We Can Help With</h2>

                    <div className="extra-grid">
                        <div className="extra-card">
                            <h3>Restaurants</h3>
                            <p>Fine dining, rooftops, steakhouses, Colombian food, sushi, and romantic spots.</p>
                        </div>

                        <div className="extra-card">
                            <h3>City Experiences</h3>
                            <p>Comuna 13, viewpoints, museums, shopping, Provenza, Laureles, and hidden gems.</p>
                        </div>

                        <div className="extra-card">
                            <h3>Day Trips</h3>
                            <p>Guatapé, coffee farms, nature escapes, adventure tours, and custom routes.</p>
                        </div>

                        <div className="extra-card">
                            <h3>Reservations</h3>
                            <p>We help coordinate reservations when needed for restaurants, tours, and VIP plans.</p>
                        </div>
                    </div>
                </section>


                <section className="experience-types">
                    <h2>Choose Your Experience</h2>

                    <div className="experience-buttons">
                        <button onClick={() => setSelectedExperience(experiences.dining)}>Fine Dining</button>
                        <button onClick={() => setSelectedExperience(experiences.rooftops)}>Rooftops</button>
                        <button onClick={() => setSelectedExperience(experiences.coffee)}>Coffee Shops</button>
                        <button onClick={() => setSelectedExperience(experiences.nightlife)}>Nightlife</button>
                        <button onClick={() => setSelectedExperience(experiences.comuna13)}>Comuna 13</button>
                        <button onClick={() => setSelectedExperience(experiences.vip)}>VIP Experiences</button>
                        <button onClick={() => setSelectedExperience(experiences.shopping)}>Shopping</button>
                    </div>

                    {selectedExperience && (
                        <div className="selected-experience">
                            <h3>{selectedExperience.title}</h3>

                            <p className="selected-description">{selectedExperience.description}</p>

                            <div className="experience-info">
                                <div className="info-box">
                                    <strong>Price Level</strong>
                                    <span>{selectedExperience.price}</span>
                                </div>

                                <div className="info-box">
                                    <strong>Booking</strong>
                                    <span>{selectedExperience.reservation}</span>
                                </div>
                            </div>

                            <ul className="experience-benefits">
                                <li>Personalized recommendations</li>
                                <li>Transportation can be coordinated</li>
                                <li>Reservation assistance available</li>
                            </ul>

                            

                        </div>
                    )}
                </section>



                <section className="extra-pricing">
                    <h2>Service Options</h2>

                    <div className="extra-grid">
                        <div className="extra-card">
                            <h3>Basic Recommendations</h3>
                            <p>Simple suggestions based on what you want to do.</p>
                            <strong>Free with transportation</strong>
                        </div>

                        <div className="extra-card featured">
                            <h3>Premium Planning</h3>
                            <p>Personalized restaurant, nightlife, and activity plan.</p>
                            <strong>From $25 USD</strong>
                        </div>

                        <div className="extra-card">
                            <h3>VIP Concierge</h3>
                            <p>Full experience planning with reservations and transportation coordination.</p>
                            <strong>Custom pricing</strong>
                        </div>
                    </div>
                </section>

                {showForm && (
                    <div className="form-overlay">
                        <div className="contact-form">
                            <button className="close-form" onClick={() => setShowForm(false)}>
                                X
                            </button>

                            <h2>Request This Experience</h2>
                            <p>{selectedExperience.title}</p>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text" 
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleFormChange} 
                                />

                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your email" 
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />

                                <input 
                                    type="text" 
                                    name="phone"
                                    placeholder="WhatsApp or phone number"
                                    value={formData.phone}
                                    onChange={handleFormChange} 
                                />

                                <textarea 
                                    name="message"
                                    placeholder="Tell us what you want help with"
                                    value={formData.message}
                                    onChange={handleFormChange} 
                                ></textarea>

                                <button 
                                    className="primary-btn"
                                    onClick={() => console.log(formData)}
                                >
                                    Send Request
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>

            <section className="contact-banner">
                <div>
                    <h2>Ready to plan your Medellin experience?</h2>
                    <p>
                        Contact us today for transportation, restaurant recommendations, 
                        nighlife, tours, and personalized experiences.
                    </p>
                </div>

                <button onClick={goContact} className="primary-btn">Contact Us</button>
            </section>

            <Footer />
        </>
    );
}

export default ExtraServices;