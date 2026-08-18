import "../index.css";

function Contact({ goHome }) {
    const displayedNumber = "+57 304 496 8091";
    const email = "jacoborendon27@gmail.com";

    return (

        <main className="contact-page">
            <section className="contact-card">

                <p className="contact-label">
                    Medellin Transportation Services
                </p>

                <h1>Contact Us</h1>

                <p className="contact-description">
                    For reservations, airport transfers, private transportation,
                    day trips, or any questions about our services, please contact us
                    using the information below.
                </p>

                <div className="contact-info">
                    <h3>WhatsApp</h3>
                    <p className="contact-value">
                        {displayedNumber}
                    </p>
                </div>

                <div className="contact-info">
                    <h3>Email</h3>
                    <p className="contact-value">
                        {email}
                    </p>
                </div>

                <button 
                    type="button"
                    className="back-home-link"
                    onClick={goHome}
                >
                    Back to Home
                </button>

            </section>
        </main>

    );
}

export default Contact;