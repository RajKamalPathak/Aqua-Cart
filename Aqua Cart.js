document.addEventListener("DOMContentLoaded", () => {
  const heroGreeting = document.getElementById("heroGreeting");
  const loginButton = document.getElementById("loginButton");
  const cartTotal = document.getElementById("cartTotal");

  function updateGreeting() {
    const hour = new Date().getHours();
    let text = "Welcome to Aqua Cart";

    if (hour < 12) text = "Morning viewings at Aqua Cart";
    else if (hour < 17) text = "Afternoon selections at Aqua Cart";
    else if (hour < 22) text = "Evening ambience by Aqua Cart";
    else text = "After-hours concierge by Aqua Cart";

    heroGreeting.textContent = text;
  }

  updateGreeting();

  /* LOGIN STATE */
  function updateLoginUI() {
    const clientName = localStorage.getItem("client_name");

    if (clientName) {
      loginButton.textContent = "Logout (" + clientName + ")";
    } else {
      loginButton.textContent = "Client Login";
      cartTotal.textContent = "0";
    }
  }

  updateLoginUI();

  /* LOGIN / LOGOUT */
  loginButton.addEventListener("click", () => {
    const clientName = localStorage.getItem("client_name");

    if (clientName) {
      localStorage.removeItem("client_name");
      alert("Logged out");
      location.reload();
    } else {
      window.location.href = "login.html";
    }
  });

  /* CART */
  let cartCount = 0;

  function loadCartCount() {
    const clientName = localStorage.getItem("client_name");
    if (!clientName) return;

    fetch(`http://localhost:3000/cart/${clientName}`)
      .then((res) => res.json())
      .then((data) => {
        cartCount = data.length;
        cartTotal.textContent = cartCount;
      });
  }

  loadCartCount();

  /* ADD TO CART */
  document.querySelectorAll(".js-add-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const clientName = localStorage.getItem("client_name");

      if (!clientName) {
        alert("Please login first");
        return;
      }

      let card = button.closest(".fish-card");

      if (!card) {
        card = button.closest(".highlight-card");
      }

      if (!card) {
        alert("Unable to identify item");
        return;
      }

      const fishName =
        card.querySelector("h3")?.innerText ||
        card.querySelector(".highlight-name")?.innerText;

      const priceText =
        card.querySelector(".fish-price")?.innerText ||
        card.querySelector(".highlight-price")?.innerText;
      const price = parseInt(priceText.replace(/\D/g, ""));

      fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_name: clientName,
          fish_name: fishName,
          price: price,
        }),
      }).then(() => loadCartCount());
    });
  });
  const bookNowButton = document.getElementById("bookNowButton");

  bookNowButton.addEventListener("click", () => {
    const clientName = localStorage.getItem("client_name");

    if (!clientName) {
      alert("Please login first");
      return;
    }

    fetch(`http://localhost:3000/cart/${clientName}`)
      .then((res) => res.json())
      .then((items) => {
        if (items.length === 0) {
          alert("Cart is empty");
          return;
        }

        const confirmBooking = confirm(
          "Confirm booking for " + items.length + " item(s)?",
        );

        if (!confirmBooking) return;

        fetch(`http://localhost:3000/cart/clear/${clientName}`, {
          method: "DELETE",
        }).then(() => {
          cartCount = 0;
          cartTotal.textContent = "0";
          alert("Booking successful");
        });
      });
  });
  const openCart = document.getElementById("openCart");
  if (!openCart) return;

  const cartModal = document.getElementById("cartModal");
  const cartItemsDiv = document.getElementById("cartItems");
  const cartSumSpan = document.getElementById("cartSum");

  window.closeCart = function () {
    cartModal.style.display = "none";
  };

  openCart.addEventListener("click", () => {
    const clientName = localStorage.getItem("client_name");

    if (!clientName) {
      alert("Please login first");
      return;
    }

    fetch(`http://localhost:3000/cart/${clientName}`)
      .then((res) => res.json())
      .then((items) => {
        if (items.length === 0) {
          alert("Cart is empty");
          return;
        }

        let total = 0;
        cartItemsDiv.innerHTML = "";

        items.forEach((item) => {
          total += item.price;
          cartItemsDiv.innerHTML += `
          <p>${item.fish_name} — ₹${item.price}</p>
        `;
        });

        cartSumSpan.textContent = total;
        cartModal.style.display = "block";
      });
  });
  document.getElementById("payNowBtn").addEventListener("click", () => {
    const clientName = localStorage.getItem("client_name");

    alert("Redirecting to payment gateway...");

    setTimeout(() => {
      alert("Payment successful");

      fetch(`http://localhost:3000/cart/clear/${clientName}`, {
        method: "DELETE",
      }).then(() => {
        cartTotal.textContent = "0";
        closeCart();
        alert("Booking confirmed");
      });
    }, 1200);
  });
});
