import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:rasmuslinde00@gmail.com" className="contact-link">
                rasmuslinde00@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+37255558714" className="contact-link">
                +372 555 58714
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p className="contact-text">Tartu, Estonia</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/rasmuslinde-design"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/rasmuslinde-design
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Let's work together!</h3>
            <p>
              I'm currently looking for internship opportunities and entry-level
              positions in software development. Feel free to reach out if you'd
              like to discuss potential collaboration or if you have any
              questions.
            </p>
            <a
              href="mailto:rasmuslinde00@gmail.com"
              className="btn btn-primary"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Rasmus Linde. All rights reserved.
        </p>
        <p className="footer-note">Built with React & ReactBits.dev</p>
      </footer>
    </section>
  );
};

export default Contact;
