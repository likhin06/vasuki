function Home() {
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center text-center"
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-3 text-white">
          Welcome to <span className="text-warning">Daily Needs Store</span>
        </h1>

        <p className="lead mb-4 text-white">
          All daily use items at <strong>best price</strong> near you
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="#products" className="btn btn-primary btn-lg">
            🛒 View Products
          </a>

          <a href="#contact" className="btn btn-outline-light btn-lg">
            📞 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
