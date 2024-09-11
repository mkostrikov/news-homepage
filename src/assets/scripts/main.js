menuHandler(
  document.querySelector("#menu"),
  document.querySelector("#open-menu"),
  document.querySelector("#close-menu"),
  bodyToggleScrollLock("l-homepage--scroll-lock")
);

function menuHandler(menu, openBtn, closeBtn, bodyScrollLock) {
  if (
    !(
      menu &&
      openBtn &&
      closeBtn &&
      bodyScrollLock &&
      menu.nodeName.toLowerCase() === "dialog"
    )
  )
    return;

  openBtn.addEventListener("click", () => {
    menu.showModal();

    bodyScrollLock();

    closeBtn.addEventListener(
      "click",
      () => {
        menu.close();
        bodyScrollLock();
      },
      { once: true }
    );
  });
}

function bodyToggleScrollLock(className) {
  return function () {
    document.querySelector("body").classList.toggle(className);
  };
}
