function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start">
          
          {/* Store Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Vasuki Store</h5>
            <p className="small">
              Your trusted daily needs store with quality products at the best price.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📞 6360852276</p>
            <p className="small mb-1">📍 Madikeri</p>
            <a
              href="https://wa.me/918971539165"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm mt-2"
            >
              💬 WhatsApp
            </a>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} Vasuki Store. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
