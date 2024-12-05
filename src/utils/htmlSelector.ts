export const htmlSelector = () => {
  // rendering select button
  const selectorEl = document.createElement("div");
  selectorEl.innerHTML = `<svg style="width: 30px; height: 30px;" t="1733379192246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4215" width="200" height="200"><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" fill="#ffffff" p-id="4216"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" fill="#ffffff" p-id="4217"></path></svg>`;
  Object.assign(selectorEl.style, {
    width: "60px",
    height: "60px",
    position: "fixed",
    bottom: "60px",
    right: "60px",
    backgroundColor: "teal",
    color: "white",
    borderRadius: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  document.body.appendChild(selectorEl);

  selectorEl.addEventListener("click", () => {
    selectorEl.style.display = "none";
  });
};
