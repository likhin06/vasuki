function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      rating: 5,
      comment: "Very good quality products and reasonable prices. Best store in our area."
    },
    {
      name: "Karthik",
      rating: 4,
      comment: "Friendly shop owner and fast service. I always buy groceries here."
    },
    {
      name: "Anil Shetty",
      rating: 5,
      comment: "Clean store, fresh items, and easy WhatsApp ordering. Highly recommended!"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          What Our Customers Say
        </h2>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4">
                <div className="card-body">
                  
                  {/* ⭐ Rating */}
                  <div className="mb-3">
                    {"⭐".repeat(review.rating)}
                  </div>

                  {/* 💬 Review */}
                  <p className="text-muted fst-italic">
                    “{review.comment}”
                  </p>

                  {/* 👤 Name */}
                  <h6 className="fw-bold mt-3">
                    — {review.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
