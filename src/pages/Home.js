function Home() {
  return (
    <div
      className="container-fluid bg-light text-center py-5"
      id="home"
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to <span className="text-primary">Daily Needs Store</span>
        </h1>

        <p className="lead mb-4">
          All daily use items at <strong>best price</strong> near you
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="#products" className="btn btn-primary btn-lg">
            🛒 View Products
          </a>

          <a href="#contact" className="btn btn-outline-secondary btn-lg">
            📞 Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
