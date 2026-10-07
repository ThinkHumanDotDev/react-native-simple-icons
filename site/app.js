// Adapted from simpleicons.org (https://github.com/simple-icons/simple-icons-website-rs, CC0-1.0).
(() => {
  const PACKAGE = "@thinkhuman/react-native-simple-icons";
  const grid = document.getElementById("grid");
  const items = [...grid.children];
  const search = document.getElementById("search");
  const searchClear = document.getElementById("search-clear");
  const noResults = document.getElementById("no-results");
  const details = document.getElementById("details");

  const storage = {
    get(key, fallback) {
      try {
        return localStorage.getItem(key) || fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // Settings just won't persist.
      }
    },
  };

  const settings = {
    order: storage.get("order", "alpha"),
    "color-scheme": storage.get("color-scheme", "system"),
    download: storage.get("download", "svg"),
    layout: storage.get("layout", "comfortable"),
  };

  const indexes = new Map(
    items.map((item) => {
      const [alpha, color] = item.dataset.o.split("-").map(Number);
      return [item, { alpha, color, random: 0 }];
    }),
  );

  const info = (item) => ({
    slug: item.dataset.slug,
    name: item.dataset.name,
    source: item.dataset.source,
    title: item.querySelector("h2").textContent,
    hex: item.querySelector(".hex").textContent.slice(1),
    guidelines: item.querySelector(".links .guidelines")?.href,
    license: item.querySelector(".links .license"),
  });

  const importLine = (name) => `import { ${name} } from "${PACKAGE}";`;
  const usage = (name) => `${importLine(name)}\n\n<${name} size={24} color="default" />`;

  // Settings

  function applySetting(setting, value) {
    settings[setting] = value;
    storage.set(setting, value);

    for (const button of document.querySelectorAll(`[data-setting="${setting}"] button`)) {
      button.classList.toggle("selected", button.dataset.value === value);
    }

    if (setting === "color-scheme") {
      const dark = value === "dark" || (value === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.className = dark ? "dark" : "light";
    } else if (setting === "layout") {
      document.body.classList.toggle("layout-compact", value === "compact");
    } else if (setting === "order") {
      if (value === "random") {
        for (const entry of indexes.values()) entry.random = Math.random();
      }
      render();
    }
  }

  for (const group of document.querySelectorAll("[data-setting]")) {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (button) applySetting(group.dataset.setting, button.dataset.value);
    });
  }

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (settings["color-scheme"] === "system") applySetting("color-scheme", "system");
  });

  // Search and ordering

  const normalize = (value) =>
    value
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  const haystacks = new Map(
    items.map((item) => {
      const { title, slug, name } = info(item);
      return [item, [normalize(title), slug, normalize(name)]];
    }),
  );

  function score(item, query) {
    let best = Infinity;
    for (const text of haystacks.get(item)) {
      const index = text.indexOf(query);
      if (index === -1) continue;
      best = Math.min(best, (text === query ? 0 : index === 0 ? 1 : 2) * 1000 + text.length);
    }
    return best;
  }

  function render() {
    const query = normalize(search.value);
    const scores = new Map();
    let visible = 0;

    for (const item of items) {
      const value = query ? score(item, query) : 0;
      scores.set(item, value);
      item.hidden = value === Infinity;
      if (!item.hidden) visible += 1;
    }

    const key = settings.order;
    const sorted = [...items].sort((a, b) => {
      if (query && scores.get(a) !== scores.get(b)) return scores.get(a) - scores.get(b);
      return indexes.get(a)[key] - indexes.get(b)[key];
    });

    grid.append(...sorted);
    noResults.hidden = visible > 0;
    searchClear.hidden = !search.value;
  }

  let searchTimer;
  search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      render();
      const url = new URL(location.href);
      if (search.value) url.searchParams.set("q", search.value);
      else url.searchParams.delete("q");
      history.replaceState(null, "", url);
    }, 120);
  });

  searchClear.addEventListener("click", () => {
    search.value = "";
    search.dispatchEvent(new Event("input"));
    search.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search && !details.open) {
      event.preventDefault();
      search.focus();
    }
  });

  // Copy

  async function copyText(text, element) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const input = document.createElement("textarea");
      input.value = text;
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    element.classList.add("copied");
    setTimeout(() => element.classList.remove("copied"), 1000);
  }

  async function svgText(slug) {
    const response = await fetch(`icons/${slug}.svg`);
    if (!response.ok) throw new Error(`Failed to load ${slug}.svg (${response.status})`);
    return response.text();
  }

  async function copyFor(kind, data, element) {
    const text = {
      svg: () => svgText(data.slug),
      hex: () => data.hex,
      import: () => importLine(data.name),
      name: () => data.name,
      usage: () => usage(data.name),
    }[kind];
    if (text) copyText(await text(), element);
  }

  // Downloads

  function save(href, filename) {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    link.click();
  }

  async function downloadSvg(data, colored = false) {
    let svg = await svgText(data.slug);
    if (colored) svg = svg.replace("<path ", `<path fill="#${data.hex}" `);
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    save(url, `${data.slug}${colored ? "-color" : ""}.svg`);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function downloadPng(data) {
    const svg = await svgText(data.slug);
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    const image = new Image();
    image.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 640;
      canvas.getContext("2d").drawImage(image, 0, 0, 640, 640);
      URL.revokeObjectURL(url);
      save(canvas.toDataURL("image/png"), `${data.slug}.png`);
    });
    image.src = url;
  }

  // Details dialog

  let current;

  function openDetails(item) {
    current = info(item);
    const light = item.querySelector(".hex").classList.contains("dark");
    document.getElementById("details-title").textContent = current.title;
    details.querySelector("#details-preview img").src = `icons/${current.slug}.svg`;
    details.querySelector("#details-preview img").alt = current.title;
    document.getElementById("details-name").textContent = current.name;
    document.getElementById("details-usage").textContent = usage(current.name);

    const hex = document.getElementById("details-hex");
    hex.textContent = `#${current.hex}`;
    hex.style.background = `#${current.hex}`;
    hex.classList.toggle("dark", light);

    const source = document.getElementById("details-source");
    source.hidden = !current.source;
    source.href = current.source || "#";

    const guidelines = document.getElementById("details-guidelines");
    guidelines.hidden = !current.guidelines;
    guidelines.href = current.guidelines || "#";

    const license = document.getElementById("details-license");
    license.hidden = !current.license;
    license.href = current.license?.href || "#";
    license.textContent = current.license ? `License: ${current.license.textContent}` : "";

    details.showModal();
  }

  document.getElementById("details-close").addEventListener("click", () => details.close());
  details.addEventListener("click", (event) => {
    if (event.target === details) details.close();
  });
  document.getElementById("details-svg").addEventListener("click", () => downloadSvg(current));
  document.getElementById("details-color-svg").addEventListener("click", () => downloadSvg(current, true));
  document.getElementById("details-png").addEventListener("click", () => downloadPng(current));
  details.addEventListener("click", (event) => {
    const target = event.target.closest(".copy");
    if (target && current) copyFor(target.dataset.copy, current, target);
  });

  // Grid actions (one delegated listener for every icon)

  grid.addEventListener("click", (event) => {
    const item = event.target.closest("li");
    const button = event.target.closest("button, h2");
    if (!item || !button) return;
    const data = info(item);

    if (button.classList.contains("view")) openDetails(item);
    else if (button.classList.contains("download")) {
      if (settings.download === "png") downloadPng(data);
      else downloadSvg(data);
    } else if (button.dataset.copy) copyFor(button.dataset.copy, data, button);
  });

  const install = document.querySelector(".install .copy");
  install.addEventListener("click", () => copyText(install.dataset.copyText, install));

  // Start

  const initialQuery = new URL(location.href).searchParams.get("q");
  if (initialQuery) search.value = initialQuery;

  for (const setting of Object.keys(settings)) applySetting(setting, settings[setting]);
})();
