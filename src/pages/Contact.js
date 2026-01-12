function Contact() {
  return (
    <div className="container py-5" id="contact">
      <h1 className="text-center mb-5 fw-bold">Contact Us</h1>

      <div className="row justify-content-center g-4">
        {/* Contact Details */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 h-100">
            <h4 className="mb-3 text-primary">Vasuki Store</h4>

            <p><strong>📞 Phone:</strong> 6360852276</p>
            <p><strong>📍 Address:</strong> Biligeri Village And Post, Madikeri</p>
            <p><strong>⏰ Open:</strong> 8 AM – 9 PM</p>

            <div className="d-grid gap-2 mt-4">
              <a
                href="tel:6360852276"
                className="btn btn-outline-primary"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/918971539165"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* QR + Map */}
        <div className="col-md-5">
          <div className="card shadow-lg p-4 text-center h-100">
            <h5 className="mb-3 text-primary">Pay using Google Pay</h5>

            <img
              src="/OR-Code.jpeg"
              alt="Google Pay QR"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "220px", margin: "0 auto" }}
            />

            <p className="text-muted mb-4">
              Scan the QR code to pay securely
            </p>

            <iframe
              title="Store Location"
              src="https://www.google.com/maps?q=Madikeri&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
