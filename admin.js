const STORAGE_KEY = "sabai_admin_data_v1";
const SESSION_KEY = "sabai_admin_session";

const demoData = {
  products: [
    {
      id: "P-1001",
      name: "น้ำยาซักผ้ารีฟิล กลิ่นตะไคร้",
      category: "家居清洁",
      price: 329,
      stock: 86,
      status: "上架",
      tag: "热卖",
      description: "适合泰国家庭日常洗衣，柠檬草清新香型。",
    },
    {
      id: "P-1002",
      name: "เจลอาบน้ำใบมะกรูด",
      category: "身体护理",
      price: 249,
      stock: 64,
      status: "上架",
      tag: "新品",
      description: "泰式青柠叶香气，适合炎热天气下使用。",
    },
    {
      id: "P-1003",
      name: "เทียนหอมลำไยและไม้ซีดาร์",
      category: "家居清洁",
      price: 390,
      stock: 18,
      status: "上架",
      tag: "低库存",
      description: "龙眼与雪松香调，适合卧室和客厅。",
    },
    {
      id: "P-1004",
      name: "เซ็ตดูแลบ้านเริ่มต้น",
      category: "优惠套装",
      price: 899,
      stock: 31,
      status: "上架",
      tag: "套装",
      description: "清洁、洗衣和织物喷雾组合，适合新客首单。",
    },
    {
      id: "P-1005",
      name: "สเปรย์ผ้าฝ้ายหอม",
      category: "家居清洁",
      price: 219,
      stock: 112,
      status: "上架",
      tag: "常规",
      description: "用于窗帘、床品和衣物的轻香喷雾。",
    },
    {
      id: "P-1006",
      name: "ครีมมือขมิ้นและน้ำผึ้ง",
      category: "身体护理",
      price: 180,
      stock: 14,
      status: "上架",
      tag: "低库存",
      description: "姜黄与蜂蜜配方，适合随身携带。",
    },
  ],
  orders: [
    {
      id: "TH-20260510-1048",
      customer: "Praew S.",
      region: "曼谷",
      amount: 899,
      payment: "PromptPay",
      status: "待发货",
      date: "2026-05-10",
    },
    {
      id: "TH-20260510-1047",
      customer: "Mint C.",
      region: "清迈",
      amount: 578,
      payment: "COD",
      status: "待发货",
      date: "2026-05-10",
    },
    {
      id: "TH-20260509-1046",
      customer: "Ton P.",
      region: "春武里",
      amount: 390,
      payment: "信用卡",
      status: "已发货",
      date: "2026-05-09",
    },
    {
      id: "TH-20260509-1045",
      customer: "Nicha R.",
      region: "普吉",
      amount: 1180,
      payment: "PromptPay",
      status: "已完成",
      date: "2026-05-09",
    },
    {
      id: "TH-20260508-1044",
      customer: "Krit W.",
      region: "暖武里",
      amount: 249,
      payment: "COD",
      status: "待付款",
      date: "2026-05-08",
    },
    {
      id: "TH-20260508-1043",
      customer: "Aom L.",
      region: "呵叻",
      amount: 767,
      payment: "PromptPay",
      status: "已完成",
      date: "2026-05-08",
    },
  ],
  customers: [
    { name: "Praew S.", contact: "praew@example.com", region: "曼谷", orders: 5, spend: 4210, level: "VIP" },
    { name: "Mint C.", contact: "mint@example.com", region: "清迈", orders: 3, spend: 2147, level: "复购客户" },
    { name: "Ton P.", contact: "ton@example.com", region: "春武里", orders: 2, spend: 1289, level: "普通客户" },
    { name: "Nicha R.", contact: "nicha@example.com", region: "普吉", orders: 4, spend: 3560, level: "VIP" },
    { name: "Krit W.", contact: "krit@example.com", region: "暖武里", orders: 1, spend: 249, level: "新客户" },
  ],
  coupons: [
    { id: "C-1", code: "THAI15", type: "百分比", value: 15, minimum: 1200 },
    { id: "C-2", code: "FREESHIP", type: "免运费", value: 0, minimum: 899 },
  ],
  settings: {
    storeName: "สบายโฮม 泰国独立站",
    currency: "THB",
    supportEmail: "hello@sabaihome.example",
    freeShipping: 1200,
    bangkokDelivery: "1-2 天",
    provinceDelivery: "2-4 天",
  },
};

let state = loadState();
let currentOrderStatus = "all";
let searchQuery = "";

const loginView = document.querySelector("#loginView");
const adminShell = document.querySelector("#adminShell");
const loginForm = document.querySelector("#loginForm");
const passwordInput = document.querySelector("#passwordInput");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".admin-section");
const pageTitle = document.querySelector("#pageTitle");
const globalSearch = document.querySelector("#globalSearch");
const toast = document.querySelector("#toast");
const sidebar = document.querySelector("#sidebar");
const productModal = document.querySelector("#productModal");
const productForm = document.querySelector("#productForm");
const productModalTitle = document.querySelector("#productModalTitle");
const orderStatusFilter = document.querySelector("#orderStatusFilter");

const formatTHB = (value) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(demoData);

  try {
    return { ...structuredClone(demoData), ...JSON.parse(saved) };
  } catch {
    return structuredClone(demoData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function statusClass(status) {
  const map = {
    待付款: "status-pending",
    待发货: "status-paid",
    已发货: "status-shipped",
    已完成: "status-done",
  };
  return map[status] || "status-done";
}

function matchesSearch(...values) {
  if (!searchQuery) return true;
  return values.join(" ").toLowerCase().includes(searchQuery);
}

function switchSection(sectionId) {
  sections.forEach((section) => section.classList.toggle("is-active", section.id === sectionId));
  navItems.forEach((item) => item.classList.toggle("is-active", item.dataset.section === sectionId));

  const section = document.querySelector(`#${sectionId}`);
  pageTitle.textContent = section?.dataset.title || "管理后台";
  sidebar.classList.remove("is-open");
}

function renderMetrics() {
  const todaySales = state.orders
    .filter((order) => order.date === "2026-05-10")
    .reduce((sum, order) => sum + order.amount, 0);
  const pendingOrders = state.orders.filter((order) => order.status === "待发货").length;
  const lowStock = state.products.filter((product) => product.stock < 20).length;
  const repeatCustomers = state.customers.filter((customer) => customer.orders >= 2).length;

  document.querySelector("#todaySales").textContent = formatTHB(todaySales);
  document.querySelector("#pendingOrders").textContent = pendingOrders;
  document.querySelector("#pendingBadge").textContent = pendingOrders;
  document.querySelector("#lowStock").textContent = lowStock;
  document.querySelector("#repeatCustomers").textContent = repeatCustomers;
}

function renderSalesChart() {
  const salesByDate = [
    ["05/04", 1280],
    ["05/05", 940],
    ["05/06", 1680],
    ["05/07", 1120],
    ["05/08", 1016],
    ["05/09", 1570],
    ["05/10", state.orders.filter((order) => order.date === "2026-05-10").reduce((sum, order) => sum + order.amount, 0)],
  ];
  const max = Math.max(...salesByDate.map(([, value]) => value), 1);
  document.querySelector("#salesChart").innerHTML = salesByDate
    .map(([label, value]) => {
      const height = Math.max(18, Math.round((value / max) * 170));
      return `
        <div class="bar-item">
          <div class="bar" style="height:${height}px"></div>
          <span class="bar-value">${formatTHB(value)}</span>
          <span class="bar-label">${label}</span>
        </div>
      `;
    })
    .join("");
}

function renderTasks() {
  const pending = state.orders.filter((order) => order.status === "待发货").length;
  const lowStock = state.products.filter((product) => product.stock < 20).length;
  const unpaid = state.orders.filter((order) => order.status === "待付款").length;

  document.querySelector("#taskList").innerHTML = [
    ["处理待发货订单", `${pending} 笔订单等待填写物流单号`],
    ["补充低库存商品", `${lowStock} 个商品库存低于 20 件`],
    ["跟进待付款客户", `${unpaid} 笔订单可以发送提醒`],
  ]
    .map(([title, note]) => `<li><strong>${title}</strong><span>${note}</span></li>`)
    .join("");
}

function renderRecentOrders() {
  document.querySelector("#recentOrders").innerHTML = state.orders
    .slice(0, 5)
    .map(
      (order) => `
        <tr>
          <td><strong>${order.id}</strong></td>
          <td>${order.customer}</td>
          <td>${formatTHB(order.amount)}</td>
          <td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderOrders() {
  const rows = state.orders.filter((order) => {
    const matchesStatus = currentOrderStatus === "all" || order.status === currentOrderStatus;
    return matchesStatus && matchesSearch(order.id, order.customer, order.region, order.payment, order.status);
  });

  document.querySelector("#ordersTable").innerHTML =
    rows
      .map(
        (order) => `
          <tr>
            <td><strong>${order.id}</strong><br><small>${order.date}</small></td>
            <td>${order.customer}</td>
            <td>${order.region}</td>
            <td>${formatTHB(order.amount)}</td>
            <td>${order.payment}</td>
            <td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td>
            <td>
              <div class="row-actions">
                <button class="mini-action" type="button" data-order-action="advance" data-id="${order.id}">推进状态</button>
                <button class="mini-action danger" type="button" data-order-action="delete" data-id="${order.id}">删除</button>
              </div>
            </td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="7">没有匹配的订单</td></tr>`;
}

function renderProducts() {
  const products = state.products.filter((product) =>
    matchesSearch(product.id, product.name, product.category, product.status, product.tag),
  );

  document.querySelector("#productAdminGrid").innerHTML =
    products
      .map(
        (product) => `
          <article class="product-admin-card">
            <div class="product-admin-top">
              <div>
                <h3>${product.name}</h3>
                <p>${product.description || "暂无商品备注"}</p>
              </div>
              <span class="status-pill ${product.status === "上架" ? "status-paid" : "status-done"}">${product.status}</span>
            </div>
            <div class="product-meta">
              <div><span>价格</span><strong>${formatTHB(product.price)}</strong></div>
              <div><span>库存</span><strong>${product.stock}</strong></div>
              <div><span>分类</span><strong>${product.category}</strong></div>
            </div>
            <div class="row-actions">
              <button class="mini-action" type="button" data-product-action="edit" data-id="${product.id}">编辑</button>
              <button class="mini-action" type="button" data-product-action="toggle" data-id="${product.id}">
                ${product.status === "上架" ? "下架" : "上架"}
              </button>
              <button class="mini-action danger" type="button" data-product-action="delete" data-id="${product.id}">删除</button>
            </div>
          </article>
        `,
      )
      .join("") || `<div class="panel">没有匹配的商品</div>`;
}

function renderCustomers() {
  const rows = state.customers.filter((customer) =>
    matchesSearch(customer.name, customer.contact, customer.region, customer.level),
  );

  document.querySelector("#customersTable").innerHTML =
    rows
      .map(
        (customer) => `
          <tr>
            <td><strong>${customer.name}</strong></td>
            <td>${customer.contact}</td>
            <td>${customer.region}</td>
            <td>${customer.orders}</td>
            <td>${formatTHB(customer.spend)}</td>
            <td><span class="status-pill ${customer.level === "VIP" ? "status-paid" : "status-done"}">${customer.level}</span></td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="6">没有匹配的客户</td></tr>`;
}

function renderCoupons() {
  document.querySelector("#couponList").innerHTML =
    state.coupons
      .map(
        (coupon) => `
          <div class="coupon-card">
            <div>
              <strong>${coupon.code}</strong>
              <span>${coupon.type} · ${coupon.type === "免运费" ? "免运费" : coupon.value}</span>
              <small>最低消费 ${formatTHB(coupon.minimum)}</small>
            </div>
            <button class="mini-action danger" type="button" data-coupon-delete="${coupon.id}">删除</button>
          </div>
        `,
      )
      .join("") || `<p>暂无优惠券</p>`;
}

function renderSettings() {
  const form = document.querySelector("#settingsForm");
  Object.entries(state.settings).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
}

function renderAll() {
  renderMetrics();
  renderSalesChart();
  renderTasks();
  renderRecentOrders();
  renderOrders();
  renderProducts();
  renderCustomers();
  renderCoupons();
  renderSettings();
}

function openProductModal(product) {
  productForm.reset();
  productModalTitle.textContent = product ? "编辑商品" : "新增商品";
  const data = product || {
    id: "",
    name: "",
    category: "家居清洁",
    price: "",
    stock: "",
    status: "上架",
    tag: "",
    description: "",
  };

  Object.entries(data).forEach(([key, value]) => {
    if (productForm.elements[key]) productForm.elements[key].value = value;
  });
  productModal.showModal();
}

function saveProduct(formData) {
  const product = {
    id: formData.get("id") || `P-${Date.now().toString().slice(-6)}`,
    name: formData.get("name").trim(),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    status: formData.get("status"),
    tag: formData.get("tag").trim(),
    description: formData.get("description").trim(),
  };

  const index = state.products.findIndex((item) => item.id === product.id);
  if (index >= 0) {
    state.products[index] = product;
  } else {
    state.products.unshift(product);
  }
  saveState();
  renderAll();
  productModal.close();
  showToast("商品已保存");
}

function advanceOrder(orderId) {
  const flow = ["待付款", "待发货", "已发货", "已完成"];
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  const current = flow.indexOf(order.status);
  order.status = flow[Math.min(current + 1, flow.length - 1)];
  saveState();
  renderAll();
  showToast(`订单 ${order.id} 已更新为 ${order.status}`);
}

function addDemoOrder() {
  const next = Math.floor(1000 + Math.random() * 8999);
  state.orders.unshift({
    id: `TH-20260510-${next}`,
    customer: "新客户",
    region: "曼谷",
    amount: 899,
    payment: "PromptPay",
    status: "待发货",
    date: "2026-05-10",
  });
  saveState();
  renderAll();
  showToast("已新增一笔演示订单");
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `sabai-admin-data-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("数据已导出");
}

function setAuthenticated(isAuthenticated) {
  loginView.hidden = isAuthenticated;
  adminShell.hidden = !isAuthenticated;
  if (isAuthenticated) renderAll();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value !== "admin123") {
    showToast("密码错误，请重新输入");
    return;
  }

  sessionStorage.setItem(SESSION_KEY, "1");
  setAuthenticated(true);
  showToast("登录成功");
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  setAuthenticated(false);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => switchSection(item.dataset.section));
});

document.querySelectorAll("[data-section-jump]").forEach((button) => {
  button.addEventListener("click", () => switchSection(button.dataset.sectionJump));
});

globalSearch.addEventListener("input", () => {
  searchQuery = globalSearch.value.trim().toLowerCase();
  renderOrders();
  renderProducts();
  renderCustomers();
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
});

orderStatusFilter.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  currentOrderStatus = button.dataset.status;
  orderStatusFilter.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
  renderOrders();
});

document.querySelector("#ordersTable").addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-action]");
  if (!button) return;

  if (button.dataset.orderAction === "advance") {
    advanceOrder(button.dataset.id);
  }
  if (button.dataset.orderAction === "delete") {
    state.orders = state.orders.filter((order) => order.id !== button.dataset.id);
    saveState();
    renderAll();
    showToast("订单已删除");
  }
});

document.querySelector("#newOrderButton").addEventListener("click", addDemoOrder);

document.querySelector("#addProductButton").addEventListener("click", () => openProductModal());

document.querySelector("#productAdminGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-action]");
  if (!button) return;

  const product = state.products.find((item) => item.id === button.dataset.id);
  if (button.dataset.productAction === "edit") openProductModal(product);
  if (button.dataset.productAction === "toggle" && product) {
    product.status = product.status === "上架" ? "下架" : "上架";
    saveState();
    renderAll();
    showToast(`商品已${product.status}`);
  }
  if (button.dataset.productAction === "delete") {
    state.products = state.products.filter((item) => item.id !== button.dataset.id);
    saveState();
    renderAll();
    showToast("商品已删除");
  }
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveProduct(new FormData(productForm));
});

document.querySelector("#closeProductModal").addEventListener("click", () => productModal.close());
document.querySelector("#cancelProduct").addEventListener("click", () => productModal.close());

document.querySelector("#couponForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.coupons.unshift({
    id: `C-${Date.now()}`,
    code: formData.get("code").trim().toUpperCase(),
    type: formData.get("type"),
    value: Number(formData.get("value")),
    minimum: Number(formData.get("minimum")),
  });
  event.currentTarget.reset();
  saveState();
  renderCoupons();
  showToast("优惠券已保存");
});

document.querySelector("#couponList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-coupon-delete]");
  if (!button) return;
  state.coupons = state.coupons.filter((coupon) => coupon.id !== button.dataset.couponDelete);
  saveState();
  renderCoupons();
  showToast("优惠券已删除");
});

document.querySelector("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.settings = {
    storeName: formData.get("storeName"),
    currency: formData.get("currency"),
    supportEmail: formData.get("supportEmail"),
    freeShipping: Number(formData.get("freeShipping")),
    bangkokDelivery: formData.get("bangkokDelivery"),
    provinceDelivery: formData.get("provinceDelivery"),
  };
  saveState();
  showToast("店铺设置已保存");
});

document.querySelector("#resetDataButton").addEventListener("click", () => {
  state = structuredClone(demoData);
  saveState();
  renderAll();
  showToast("已恢复演示数据");
});

document.querySelector("#exportButton").addEventListener("click", exportData);

setAuthenticated(sessionStorage.getItem(SESSION_KEY) === "1");
