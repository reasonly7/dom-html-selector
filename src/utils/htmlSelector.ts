export const htmlSelector = () => {
  // detect
  if (document.querySelector("#domHtmlSelector")) {
    return;
  }

  // render rounded button
  const selectorEl = document.createElement("div");
  selectorEl.innerHTML = `<svg style="width: 30px; height: 30px;" t="1733379192246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4215" width="200" height="200"><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" fill="#ffffff" p-id="4216"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" fill="#ffffff" p-id="4217"></path></svg>`;
  selectorEl.id = "domHtmlSelector";
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

  // mount
  document.body.appendChild(selectorEl);

  selectorEl.addEventListener("click", () => {
    const frameEl = document.createElement("div");
    Object.assign(frameEl.style, {
      zIndex: "2147483646",
      position: "fixed",
      backgroundColor: "#42b88325",
      border: "1px solid #42b88350",
      borderRadius: "5px",
      pointerEvents: "none",
      transition: "all 0.1s ease-in",
    });

    const mousemoveHandler = (e: MouseEvent) => {
      const targetNode = e.target as HTMLElement | null;
      if (targetNode) {
        const rect = targetNode.getBoundingClientRect();
        Object.assign(frameEl.style, {
          left: `${rect.x}px`,
          top: `${rect.y}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        });
      } else {
        resizeHandler();
      }
    };

    const clickHandler = (e: MouseEvent) => {
      console.log(e.target);
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      resizeHandler();
    };

    const resizeHandler = () => {
      selectorEl.style.display = "flex";
      document.body.removeChild(frameEl);
      document.body.removeEventListener("mousemove", mousemoveHandler);
      document.body.removeEventListener("click", clickHandler, true);
      document.body.removeEventListener("resize", resizeHandler, true);
    };

    document.body.addEventListener("mousemove", mousemoveHandler);
    document.body.addEventListener("resize", resizeHandler, true);
    document.body.addEventListener("click", clickHandler, true);

    document.body.appendChild(frameEl);
    selectorEl.style.display = "none";
  });
};
