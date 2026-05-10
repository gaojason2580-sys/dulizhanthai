const products = [
  {
    id: "SKU-1001",
    name: "กระดาษทิชชู่ 4 ชั้น แพ็ก 12 ห่อ สำหรับบ้านและคอนโด",
    category: "paper",
    price: 154,
    oldPrice: 229,
    rating: 4.9,
    sold: 1820,
    badge: "ขายดี",
    art: "art-paper",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1002",
    name: "กระดาษชำระม้วนเล็ก ไม่มีแกน เนื้อนุ่ม ประหยัดพื้นที่",
    category: "paper",
    price: 131,
    oldPrice: 199,
    rating: 4.7,
    sold: 946,
    badge: "ลดแรง",
    art: "art-paper",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1003",
    name: "น้ำยาซักผ้ารีฟิล กลิ่นตะไคร้ สำหรับผ้าใช้ประจำวัน",
    category: "home",
    price: 329,
    oldPrice: 460,
    rating: 4.9,
    sold: 728,
    badge: "ส่งฟรี",
    art: "art-clean",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1004",
    name: "เจลอาบน้ำใบมะกรูด ขวด 420 มล. กลิ่นสดชื่น",
    category: "care",
    price: 249,
    oldPrice: 319,
    rating: 4.8,
    sold: 612,
    badge: "ใหม่",
    art: "art-care",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1005",
    name: "เซ็ตดูแลบ้านเริ่มต้น 4 ชิ้น ทำความสะอาดครบชุด",
    category: "bundle",
    price: 899,
    oldPrice: 1260,
    rating: 5,
    sold: 318,
    badge: "คุ้มค่า",
    art: "art-bundle",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1006",
    name: "สเปรย์ผ้าฝ้ายหอม สำหรับผ้าม่าน โซฟา และเครื่องนอน",
    category: "home",
    price: 219,
    oldPrice: 299,
    rating: 4.8,
    sold: 543,
    badge: "ฮิต",
    art: "art-clean",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1007",
    name: "ครีมมือขมิ้นและน้ำผึ้ง หลอดพกพา 60 มล.",
    category: "care",
    price: 180,
    oldPrice: 240,
    rating: 4.6,
    sold: 404,
    badge: "ราคาดี",
    art: "art-care",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1008",
    name: "ถุงขยะย่อยสลายได้ แพ็ก 60 ใบ สำหรับครัวไทย",
    category: "eco",
    price: 199,
    oldPrice: 285,
    rating: 4.7,
    sold: 377,
    badge: "Eco",
    art: "art-clean",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1009",
    name: "ผ้าเช็ดมือแบบแขวน แพ็ก 6 ชิ้น สำหรับห้องครัว",
    category: "paper",
    price: 229,
    oldPrice: 350,
    rating: 4.5,
    sold: 831,
    badge: "แพ็กคุ้ม",
    art: "art-paper",
    freeShip: true,
    cod: false,
    thaiStock: true,
  },
  {
    id: "SKU-1010",
    name: "เทียนหอมลำไยและไม้ซีดาร์ ถ้วยแก้ว 180 กรัม",
    category: "home",
    price: 390,
    oldPrice: 520,
    rating: 4.7,
    sold: 286,
    badge: "ของขวัญ",
    art: "art-clean",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1011",
    name: "โฟมล้างมือกลิ่นมะลิ รีฟิล 500 มล.",
    category: "care",
    price: 169,
    oldPrice: 220,
    rating: 4.8,
    sold: 691,
    badge: "ดีล",
    art: "art-care",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1012",
    name: "ชุดรีฟิลรักษ์โลก 3 ชิ้น สำหรับบ้านขนาดเล็ก",
    category: "eco",
    price: 599,
    oldPrice: 840,
    rating: 4.9,
    sold: 208,
    badge: "ส่งฟรี",
    art: "art-bundle",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1013",
    name: "น้ำยาล้างจานกลิ่นมะนาว รีฟิล 800 มล.",
    category: "home",
    price: 149,
    oldPrice: 210,
    rating: 4.7,
    sold: 774,
    badge: "ถูกสุด",
    art: "art-clean",
    freeShip: false,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1014",
    name: "กระดาษเช็ดหน้าแบบกล่อง 3 ชั้น แพ็ก 8 กล่อง",
    category: "paper",
    price: 259,
    oldPrice: 360,
    rating: 4.8,
    sold: 1120,
    badge: "Top",
    art: "art-paper",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
  {
    id: "SKU-1015",
    name: "สครับผิวเกลือทะเลและตะไคร้ 220 กรัม",
    category: "care",
    price: 299,
    oldPrice: 420,
    rating: 4.7,
    sold: 244,
    badge: "ใหม่",
    art: "art-care",
    freeShip: false,
    cod: false,
    thaiStock: true,
  },
  {
    id: "SKU-1016",
    name: "กล่องเซ็ตแม่บ้านประจำเดือน 6 รายการ ส่งฟรี",
    category: "bundle",
    price: 1290,
    oldPrice: 1680,
    rating: 4.9,
    sold: 102,
    badge: "Mega",
    art: "art-bundle",
    freeShip: true,
    cod: true,
    thaiStock: true,
  },
];

const cart = new Map();
let activeCategory = "all";
let visibleCount = 10;
let activeCoupon = "";

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const sortSelect = document.querySelector("#sortSelect");
const resultMeta = document.querySelector("#resultMeta");
const cartButton = document.querySelector("#cartButton");
const miniCartButton = document.querySelector("#miniCartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const cartBackdrop = document.querySelector("#cartBackdrop");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const miniCartTotal = document.querySelector("#miniCartTotal");
const couponValue = document.querySelector("#couponValue");
const checkoutHint = document.querySelector("#checkoutHint");
const checkoutProgress = document.querySelector("#checkoutProgress");
const filterPanel = document.querySelector("#filterPanel");
const toast = document.querySelector("#toast");

const formatTHB = (value) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(value);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function getSelectedPriceRange() {
  return document.querySelector('input[name="priceRange"]:checked')?.value || "all";
}

function productMatchesFilters(product) {
  const query = searchInput.value.trim().toLocaleLowerCase("th-TH");
  const priceRange = getSelectedPriceRange();
  const freeShip = document.querySelector("#freeShipFilter").checked;
  const cod = document.querySelector("#codFilter").checked;
  const thaiStock = document.querySelector("#thaiStockFilter").checked;
  const rating = document.querySelector("#ratingFilter").checked;

  const matchesCategory = activeCategory === "all" || product.category === activeCategory;
  const matchesSearch = !query || product.name.toLocaleLowerCase("th-TH").includes(query);
  const matchesPrice =
    priceRange === "all" ||
    (priceRange === "under250" && product.price < 250) ||
    (priceRange === "250to500" && product.price >= 250 && product.price <= 500) ||
    (priceRange === "over500" && product.price > 500);

  return (
    matchesCategory &&
    matchesSearch &&
    matchesPrice &&
    (!freeShip || product.freeShip) &&
    (!cod || product.cod) &&
    (!thaiStock || product.thaiStock) &&
    (!rating || product.rating >= 4.7)
  );
}

function sortedProducts(items) {
  const list = [...items];
  const sort = sortSelect.value;
  if (sort === "priceLow") return list.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") return list.sort((a, b) => b.price - a.price);
  if (sort === "rating") return list.sort((a, b) => b.rating - a.rating);
  return list.sort((a, b) => b.sold - a.sold);
}

function renderProducts() {
  const filtered = sortedProducts(products.filter(productMatchesFilters));
  const visible = filtered.slice(0, visibleCount);
  const query = searchInput.value.trim() || "ของใช้ในบ้าน";

  resultMeta.textContent = `พบ ${filtered.length} รายการสำหรับ “${query}”`;
  document.querySelector("#loadMoreButton").hidden = visible.length >= filtered.length;

  productGrid.innerHTML =
    visible
      .map(
        (product) => `
          <article class="product-card">
            <div class="product-art ${product.art}">
              <span class="product-badge">${product.badge}</span>
              <div class="product-pack"></div>
            </div>
            <div class="product-info">
              <h3 class="product-title">${product.name}</h3>
              <div class="price-line">
                <strong>${formatTHB(product.price)}</strong>
                <del>${formatTHB(product.oldPrice)}</del>
              </div>
              <div class="product-meta">
                <span>★ ${product.rating.toFixed(1)}</span>
                <span>ขายแล้ว ${product.sold.toLocaleString("th-TH")}</span>
              </div>
              <div class="shipping-tags">
                ${product.freeShip ? "<span>ส่งฟรี</span>" : "<span>ค่าส่งต่ำ</span>"}
                ${product.cod ? "<span>COD</span>" : ""}
                ${product.thaiStock ? "<span>สต็อกไทย</span>" : ""}
              </div>
              <div class="product-actions">
                <button class="buy-now" type="button" data-buy="${product.id}">ซื้อเลย</button>
                <button class="add-cart" type="button" data-add="${product.id}" aria-label="เพิ่ม ${product.name}">+</button>
              </div>
            </div>
          </article>
        `,
      )
      .join("") || `<div class="empty-cart">ไม่พบสินค้าที่ตรงกับตัวกรอง</div>`;
}

function cartEntries() {
  return [...cart.values()];
}

function discountForSubtotal(subtotal) {
  if (activeCoupon === "THAI15" && subtotal >= 500) return Math.round(subtotal * 0.15);
  if (activeCoupon === "HOME99" && subtotal >= 899) return 99;
  return 0;
}

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = discountForSubtotal(subtotal);
  const total = Math.max(0, subtotal - discount);
  const checkoutMinimum = 180;
  const progress = Math.min(100, Math.round((subtotal / checkoutMinimum) * 100));

  cartCount.textContent = count;
  cartTotal.textContent = formatTHB(total);
  miniCartTotal.textContent = formatTHB(total);
  couponValue.textContent = `-${formatTHB(discount)}`;
  checkoutProgress.style.width = `${progress}%`;
  checkoutHint.textContent =
    subtotal >= checkoutMinimum ? "พร้อมชำระเงิน" : `ขั้นต่ำ ${formatTHB(checkoutMinimum - subtotal)} เพื่อชำระเงิน`;

  if (!entries.length) {
    cartItems.innerHTML = `<p class="empty-cart">ยังไม่มีสินค้าในรถเข็น</p>`;
    return;
  }

  cartItems.innerHTML = entries
    .map(
      (item) => `
        <div class="cart-line">
          <div class="cart-thumb"><i></i></div>
          <div>
            <strong>${item.name}</strong>
            <small>${formatTHB(item.price)} × ${item.quantity}</small>
          </div>
          <button type="button" data-remove="${item.id}" aria-label="ลบสินค้า">−</button>
        </div>
      `,
    )
    .join("");
}

function addToCart(productId, openDrawer = false) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const current = cart.get(product.id) || { ...product, quantity: 0 };
  current.quantity += 1;
  cart.set(product.id, current);
  renderCart();
  showToast(`เพิ่ม ${product.name} แล้ว`);
  if (openDrawer) openCart();
}

function removeFromCart(productId) {
  const current = cart.get(productId);
  if (!current) return;

  current.quantity -= 1;
  if (current.quantity <= 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, current);
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

function activateCategory(category) {
  activeCategory = category;
  categorySelect.value = category === "eco" ? "all" : category;
  document.querySelectorAll(".category-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });
  visibleCount = 10;
  renderProducts();
}

function applyCoupon(code) {
  activeCoupon = code;
  renderCart();
  showToast(`ใช้คูปอง ${code} แล้ว`);
}

function startTimer() {
  let seconds = 2 * 60 * 60 + 45 * 60;
  const timer = document.querySelector("#dealTimer");
  window.setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    timer.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  visibleCount = 10;
  renderProducts();
});

searchInput.addEventListener("input", () => {
  visibleCount = 10;
  renderProducts();
});

categorySelect.addEventListener("change", () => {
  activateCategory(categorySelect.value);
});

sortSelect.addEventListener("change", renderProducts);

document.querySelectorAll(".category-chip").forEach((chip) => {
  chip.addEventListener("click", () => activateCategory(chip.dataset.category));
});

document.querySelectorAll(".filter-group input").forEach((input) => {
  input.addEventListener("change", () => {
    visibleCount = 10;
    renderProducts();
  });
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  document.querySelector('input[name="priceRange"][value="all"]').checked = true;
  document.querySelector("#freeShipFilter").checked = false;
  document.querySelector("#codFilter").checked = false;
  document.querySelector("#thaiStockFilter").checked = false;
  document.querySelector("#ratingFilter").checked = false;
  renderProducts();
});

document.querySelector("#filterToggle").addEventListener("click", () => {
  document.body.classList.add("filter-open");
  filterPanel.classList.add("is-open");
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("filter-open")) return;
  if (filterPanel.contains(event.target) || event.target.closest("#filterToggle")) return;
  document.body.classList.remove("filter-open");
  filterPanel.classList.remove("is-open");
});

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const buyButton = event.target.closest("[data-buy]");
  if (addButton) addToCart(addButton.dataset.add);
  if (buyButton) addToCart(buyButton.dataset.buy, true);
});

document.querySelector("#loadMoreButton").addEventListener("click", () => {
  visibleCount += 10;
  renderProducts();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) removeFromCart(button.dataset.remove);
});

document.querySelectorAll("[data-coupon]").forEach((button) => {
  button.addEventListener("click", () => applyCoupon(button.dataset.coupon));
});

cartButton.addEventListener("click", openCart);
miniCartButton.addEventListener("click", openCart);
document.querySelector(".checkout-button").addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartBackdrop.addEventListener("click", closeCartDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
    document.body.classList.remove("filter-open");
    filterPanel.classList.remove("is-open");
  }
});

renderProducts();
renderCart();
startTimer();
