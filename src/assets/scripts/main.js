function menuHandler(menu, openBtn, closeBtn, bodyScrollLock) {
  if (
    !(menu && openBtn && closeBtn && menu.nodeName.toLowerCase() === "dialog")
  )
    return;

  openBtn.addEventListener("click", () => {
    menu.showModal();
    console.log("open");
    bodyScrollLock('l-homepage--scroll-lock');

    closeBtn.addEventListener(
      "click",
      () => {
        menu.close();
        bodyScrollLock('l-homepage--scroll-lock');
      },
      { once: true }
    );
  });
}

menuHandler(
  document.querySelector("#menu"),
  document.querySelector("#open-menu"),
  document.querySelector("#close-menu"),
  bodyToggleScrollLock
);

function bodyToggleScrollLock(className) {
  document.querySelector("body").classList.toggle(className);
}
