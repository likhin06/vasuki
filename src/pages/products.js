import { useState } from "react";

function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState({});

  const items = [
    { name: "Rice", price: "₹60 / kg", category: "Groceries", badge: "Popular" },
    { name: "Wheat Flour", price: "₹55 / kg", category: "Groceries", badge: "Best Price" },
    { name: "Sugar", price: "₹45 / kg", category: "Groceries", badge: "10% OFF" },
    { name: "Salt", price: "₹20 / kg", category: "Groceries" },
    { name: "Cooking Oil", price: "₹140 / liter", category: "Groceries", badge: "New" },

    { name: "Milk Packet", price: "₹30", category: "Dairy", badge: "Popular" },
    { name: "Curd", price: "₹40", category: "Dairy" },

    { name: "Soap", price: "₹35", category: "Personal Care", badge: "Best Price" },
    { name: "Shampoo", price: "₹75", category: "Personal Care", badge: "10% OFF" },
    { name: "Toothpaste", price: "₹65", category: "Personal Care" },

    { name: "Detergent Powder", price: "₹90 / kg", category: "Home Essentials", badge: "Popular" },
    { name: "Dish Wash Liquid", price: "₹55", category: "Home Essentials" },
    { name: "Match Box", price: "₹10", category: "Home Essentials", badge: "Best Price" },
    { name: "Agarbatti", price: "₹30", category: "Home Essentials" },

    { name: "Biscuits", price: "₹20", category: "Snacks", badge: "New" },
    { name: "Bread", price: "₹35", category: "Snacks" },
    { name: "Tea Powder", price: "₹120 / 250g", category: "Snacks", badge: "Popular" },
    { name: "Coffee Powder", price: "₹150 / 200g", category: "Snacks" }
  ];

  const categories = [
    "All",
    "Groceries",
    "Dairy",
    "Personal Care",
    "Home Essentials",
    "Snacks"
  ];

  const updateQty = (name, change) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + change)
    }));
  };

  const filteredItems = items.filter((item) => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section id="products">
<div className="container products-section rounded-4 py-5">

        <h1 className="text-center fw-bold mb-4">Our Products</h1>

        {/* 🔍 Search */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* 🗂 Categories */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                category === cat
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🛒 Products */}
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const qty = quantities[item.name] || 1;

              return (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card h-100 text-center position-relative">
                    
                    {/* 🏷 Badge */}
                    {item.badge && (
                      <span
                        className={`badge position-absolute top-0 end-0 m-2 ${
                          item.badge === "Popular"
                            ? "bg-warning text-dark"
                            : item.badge === "Best Price"
                            ? "bg-success"
                            : item.badge === "New"
                            ? "bg-primary"
                            : "bg-danger"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    <div className="card-body d-flex flex-column">
                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-success fs-5">{item.price}</p>

                      {/* ➕➖ Quantity */}
                      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQty(item.name, -1)}
                        >
                          −
                        </button>
                        <span className="fw-bold">{qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQty(item.name, 1)}
                        >
                          +
                        </button>
                      </div>

                      {/* WhatsApp Order */}
                      <a
                        href={`https://wa.me/918971539165?text=I want to order ${item.name} - Quantity: ${qty}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-success mt-auto"
                      >
                        🛒 Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-muted">No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
