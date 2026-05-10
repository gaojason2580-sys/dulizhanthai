const cart = new Map();
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const cartBackdrop = document.querySelector("#cartBackdrop");
const closeCart = document.querySelector("#closeCart");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const addButtons = document.querySelectorAll(".add-button");
const bundleButton = document.querySelector("#bundleButton");
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
const searchInput = document.querySelector("#searchInput");
const menuButton = document.querySelector("#menuButton");
const mobileNav = document.querySelector("#mobileNav");

const formatTHB = (value) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(value);

function renderCart() {
  const entries = [...cart.values()];
  const itemCount = entries.reduce((sum, item) => sum + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = itemCount;
  cartTotal.textContent = formatTHB(total);

  if (!entries.length) {
    cartItems.innerHTML = '<p class="empty-cart">ยังไม่มีสินค้าในตะกร้า</p>';
    return;
  }

  cartItems.innerHTML = entries
    .map(
      (item) => `
        <div class="cart-line">
          <div>
            <strong>${item.name}</strong>
            <small>${formatTHB(item.price)} × ${item.quantity}</small>
          </div>
          <button type="button" data-remove="${item.name}" aria-label="ลบ ${item.name}">−</button>
        </div>
      `,
    )
    .join("");
}

function addToCart(name, price) {
  const current = cart.get(name) || { name, price, quantity: 0 };
  current.quantity += 1;
  cart.set(name, current);
  renderCart();
  openCart();
}

function removeFromCart(name) {
  const current = cart.get(name);
  if (!current) return;

  current.quantity -= 1;
  if (current.quantity <= 0) {
    cart.delete(name);
  } else {
    cart.set(name, current);
  }
  renderCart();
}

function openCart() {
  document.body.classList.add("cart-open");
  cartBackdrop.hidden = false;
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  document.body.classList.remove("cart-open");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
}

function applyProductFilters() {
  const activeFilter = document.querySelector(".filter.is-active")?.dataset.filter || "all";
  const query = searchInput.value.trim().toLocaleLowerCase("th-TH");

  productCards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.toLocaleLowerCase("th-TH").includes(query);
    card.classList.toggle("is-hidden", !matchesCategory || !matchesSearch);
  });
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.product, Number(button.dataset.price));
  });
});

bundleButton.addEventListener("click", () => {
  addToCart("เซ็ตดูแลบ้านเริ่มต้น", 899);
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartBackdrop.addEventListener("click", closeCartDrawer);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) removeFromCart(button.dataset.remove);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyProductFilters();
  });
});

searchInput.addEventListener("input", applyProductFilters);

menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("is-open");
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) mobileNav.classList.remove("is-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCartDrawer();
});

if (window.lucide) {
  window.lucide.createIcons();
}

renderCart();
