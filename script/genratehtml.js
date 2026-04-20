export const section = document.querySelector(".extensions-grid");

export let extensions = JSON.parse(localStorage.getItem("extensionNames")) || [
  {
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    img: "icons/logo-devlens.svg",
    active: true,
  },
  {
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    img: "icons/logo-style-spy.svg",
    active: true,
  },
  {
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    img: "icons/logo-speed-boost.svg",
    active: false,
  },
  {
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    img: "icons/logo-json-wizard.svg",
    active: true,
  },
  {
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    img: "icons/logo-tab-master-pro.svg",
    active: true,
  },
  {
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    img: "icons/logo-viewport-buddy.svg",
    active: false,
  },
  {
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    img: "icons/logo-markup-notes.svg",
    active: true,
  },
  {
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    img: "icons/logo-grid-guides.svg",
    active: false,
  },
  {
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    img: "icons/logo-palette-picker.svg",
    active: true,
  },
  {
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    img: "icons/logo-link-checker.svg",
    active: true,
  },
  {
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    img: "icons/logo-dom-snapshot.svg",
    active: false,
  },
  {
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    img: "icons/logo-console-plus.svg",
    active: true,
  },

];

export function renderHTML(filter = "all") {
  let html = "";

  const filtered = extensions.filter((ext)=>{
    if(filter === "active") return ext.active === true;
    if(filter === "inactive") return ext.active === false;
    return true;
  })


  filtered.forEach((card) => {
    html += `
      <div class="extension-card">
        <div class="extension-top">
          <img src="${card.img}" alt="${card.name}">
          <div class="extension-info">
            <h2>${card.name}</h2>
            <p>${card.description}</p>
          </div>
        </div>
        <div class="extension-bottom">
          <button class="remove">Remove</button>
          <label class="switch">
            <input type="checkbox" class = "checkbox" ${card.active ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
  });

  section.innerHTML = html;
}
