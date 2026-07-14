const WHATSAPP_NUMBER = "2347038995759";
const PAGE_SIZE = 8;

const products = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    generation: "17",
    label: "Latest range",
    description: "The top model in the featured iPhone 17 range.",
    images: ["images/17promax-1.jpg", "images/17promax-2.jpg"]
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    generation: "17",
    label: "Pro model",
    description: "A pro-level option in a more compact size.",
    images: ["images/17pro-1.jpg", "images/17pro-2.jpg", "images/17pro-3.jpg"]
  },
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    generation: "17",
    label: "Slim design",
    description: "A lighter iPhone option from the newest range.",
    images: ["images/17air-1.jpg", "images/17air-2.jpg", "images/17air-3.jpg"]
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    generation: "17",
    label: "New arrival",
    description: "The standard model in the featured iPhone 17 range.",
    images: ["images/17-1.jpg", "images/17-2.jpg", "images/17-3.jpg"]
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    generation: "16",
    label: "Customer favourite",
    description: "A large-screen pro model for premium iPhone buyers.",
    images: ["images/16promax-1.jpg", "images/16promax-2.jpg", "images/16promax-3.jpg"]
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    generation: "16",
    label: "Pro model",
    description: "Pro features in a smaller form than the Pro Max.",
    images: ["images/16pro-1.jpg", "images/16pro-2.jpg", "images/16pro-3.jpg"]
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    generation: "16",
    label: "Large display",
    description: "A big-screen choice in the iPhone 16 family.",
    images: ["images/16plus-1.jpg", "images/16plus-2.png", "images/16plus-3.jpg"]
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    generation: "16",
    label: "Popular choice",
    description: "A current-generation option with a balanced size.",
    images: ["images/16-1.jpg", "images/16-2.jpg", "images/16-3.jpg"]
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    generation: "15",
    label: "Premium pick",
    description: "A high-end model with a large display and pro design.",
    images: ["images/15promax-1.jpeg", "images/15promax-2.jpeg", "images/15promax-3.jpeg"]
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    generation: "15",
    label: "Pro model",
    description: "A premium option with a compact pro form.",
    images: ["images/15pro-1.jpeg", "images/15pro-2.jpeg", "images/15pro-3.jpeg"]
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    generation: "15",
    label: "Everyday flagship",
    description: "A popular modern iPhone for everyday use.",
    images: ["images/15-1.jpeg", "images/15-2.jpeg", "images/15-3.jpeg"]
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    generation: "14",
    label: "Strong value",
    description: "A large pro model that remains a popular request.",
    images: ["images/14promax-1.jpeg", "images/14promax-2.jpeg", "images/14promax-3.jpeg"]
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    generation: "14",
    label: "Pro model",
    description: "A compact premium choice from the iPhone 14 family.",
    images: ["images/14pro-1.jpeg", "images/14pro-2.jpeg", "images/14pro-3.jpeg"]
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    generation: "14",
    label: "Popular model",
    description: "A familiar design and a practical upgrade option.",
    images: ["images/14-1.jpeg", "images/14-2.jpeg", "images/14-3.jpeg"]
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    generation: "13",
    label: "Buyer favourite",
    description: "A large-screen pro model with enduring demand.",
    images: ["images/13promax-1.jpeg", "images/13promax-2.jpeg", "images/13promax-3.jpeg"]
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    generation: "13",
    label: "Pro model",
    description: "A smaller pro option from the iPhone 13 series.",
    images: ["images/13pro-1.jpeg", "images/13pro-2.jpeg", "images/13pro-3.jpeg"]
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    generation: "13",
    label: "Great all-rounder",
    description: "A balanced iPhone that remains a common request.",
    images: ["images/13-1.jpeg", "images/13-2.jpeg", "images/13-3.jpeg"]
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    generation: "12",
    label: "Large display",
    description: "A big-screen pro option at an earlier generation.",
    images: ["images/12promax-1.jpeg", "images/12promax-2.jpeg", "images/12promax-3.jpeg"]
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    generation: "12",
    label: "Pro value",
    description: "A premium design for buyers comparing older pro models.",
    images: ["images/12pro-1.jpeg", "images/12pro-2.jpeg", "images/12pro-3.jpeg"]
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    generation: "12",
    label: "Accessible option",
    description: "A practical entry into the modern iPhone design family.",
    images: ["images/12.jpeg", "images/12-2.jpeg", "images/12-3.jpeg"]
  },
  {
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max",
    generation: "11",
    label: "Classic pro",
    description: "A large classic iPhone option for budget-focused buyers.",
    images: ["images/11promax-1.jpeg", "images/11promax-2.jpeg", "images/11promax-3.jpeg"]
  },
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    generation: "11",
    label: "Compact pro",
    description: "A smaller classic pro model with multiple photo options.",
    images: ["images/11pro-1.jpeg", "images/11pro-2.jpeg", "images/11pro-3.jpeg"]
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    generation: "11",
    label: "Budget-friendly",
    description: "A widely known iPhone for buyers starting at a lower range.",
    images: ["images/11-1.jpeg", "images/11-2.jpeg", "images/11-3.jpeg"]
  }
];

const productGrid = document.querySelector("#productGrid");
const filterTabs = document.querySelector("#filterTabs");
const productSearch = document.querySelector("#productSearch");
const resultCount = document.querySelector("#resultCount");
const loadMoreButton = document.querySelector("#loadMore");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");
const finderForm = document.querySelector("#gadgetFinder");
const modal = document.querySelector("#productModal");
const modalMainImage = document.querySelector("#modalMainImage");
const modalThumbs = document.querySelector("#modalThumbs");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalWhatsapp = document.querySelector("#modalWhatsapp");

let activeGeneration = "All";
let visibleCount = PAGE_SIZE;
let lastFocusedElement = null;

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productMessage(product) {
  return [
    "Hello Megabros,",
    "",
    `I am interested in the ${product.name}.`,
    "Please confirm the available storage, colour, condition and current price.",
    "I would also like to know the pickup or delivery options."
  ].join("\n");
}

function filteredProducts() {
  const term = productSearch.value.trim().toLowerCase();
  return products.filter((product) => {
    const matchesGeneration = activeGeneration === "All" || product.generation === activeGeneration;
    const matchesSearch = !term || `${product.name} ${product.label} ${product.description}`.toLowerCase().includes(term);
    return matchesGeneration && matchesSearch;
  });
}

function renderFilters() {
  const generations = ["All", "17", "16", "15", "14", "13", "12", "11"];
  filterTabs.innerHTML = generations.map((generation) => {
    const label = generation === "All" ? "All models" : `iPhone ${generation}`;
    return `<button class="filter-tab${generation === activeGeneration ? " active" : ""}" type="button" data-generation="${generation}" aria-pressed="${generation === activeGeneration}">${label}</button>`;
  }).join("");
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.images[0]}" alt="${product.name} product photo" loading="lazy" width="1080" height="1350">
        <span class="product-tag">${product.label}</span>
        <span class="photo-count">${product.images.length} photo${product.images.length === 1 ? "" : "s"}</span>
      </div>
      <div class="product-copy">
        <p class="product-kicker">iPhone ${product.generation} series</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="availability"><span>Price</span><strong>Ask for today’s price</strong></div>
        <div class="product-actions">
          <button class="photo-button" type="button" data-product-id="${product.id}" aria-label="View photos of ${product.name}">Photos</button>
          <a class="product-whatsapp" href="${whatsappLink(productMessage(product))}" target="_blank" rel="noopener">Ask on WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const matches = filteredProducts();
  const visible = matches.slice(0, visibleCount);

  resultCount.textContent = `${matches.length} model${matches.length === 1 ? "" : "s"} found`;
  productGrid.innerHTML = visible.length
    ? visible.map(productCard).join("")
    : `<div class="empty-state"><h3>No matching model found</h3><p>Try another search or use the gadget finder to request the exact device you need.</p><a class="btn btn-dark" href="#request">Use the gadget finder</a></div>`;

  loadMoreButton.hidden = visible.length >= matches.length;
}

function setGeneration(generation) {
  activeGeneration = generation;
  visibleCount = PAGE_SIZE;
  renderFilters();
  renderProducts();
}

function openModal(product) {
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalMainImage.src = product.images[0];
  modalMainImage.alt = `${product.name} product photo 1`;
  modalWhatsapp.href = whatsappLink(productMessage(product));

  modalThumbs.innerHTML = product.images.map((image, index) => `
    <button class="modal-thumb${index === 0 ? " active" : ""}" type="button" data-image="${image}" data-index="${index}" aria-label="Show ${product.name} photo ${index + 1}" aria-pressed="${index === 0}">
      <img src="${image}" alt="" loading="lazy">
    </button>
  `).join("");

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

filterTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-generation]");
  if (!button) return;
  setGeneration(button.dataset.generation);
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;
  const product = products.find((item) => item.id === button.dataset.productId);
  if (product) openModal(product);
});

productSearch.addEventListener("input", () => {
  visibleCount = PAGE_SIZE;
  renderProducts();
});

loadMoreButton.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderProducts();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav") && navLinks.classList.contains("open")) closeMenu();
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }

  const thumb = event.target.closest(".modal-thumb");
  if (!thumb) return;
  modalMainImage.src = thumb.dataset.image;
  modalMainImage.alt = `${modalTitle.textContent} product photo ${Number(thumb.dataset.index) + 1}`;
  modalThumbs.querySelectorAll(".modal-thumb").forEach((item) => {
    const isActive = item === thumb;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeModal();
    if (navLinks.classList.contains("open")) closeMenu();
  }

  if (event.key === "Tab" && !modal.hidden) {
    const focusable = [...modal.querySelectorAll("button:not([disabled]), a[href]")];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

finderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!finderForm.reportValidity()) return;

  const formData = new FormData(finderForm);
  const category = formData.get("category");
  const condition = formData.get("condition");
  const budget = formData.get("budget");
  const model = formData.get("model")?.trim();
  const notes = formData.get("notes")?.trim();

  const message = [
    "Hello Megabros,",
    "",
    "Please help me find a gadget with these details:",
    `• Category: ${category}`,
    `• Condition: ${condition}`,
    `• Budget: ${budget}`,
    model ? `• Preferred model: ${model}` : null,
    notes ? `• Other details: ${notes}` : null,
    "",
    "Please send me the current options, prices and availability."
  ].filter(Boolean).join("\n");

  window.open(whatsappLink(message), "_blank", "noopener");
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();
renderFilters();
renderProducts();
