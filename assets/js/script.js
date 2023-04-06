document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const menu = document.querySelector(".open-sidebar");
  const sidebar = document.querySelector("aside");
  const upperHeader = document.querySelector(".upper-header");
  const lowerHeader = document.querySelector(".lower-header");
  const userWelcome = document.querySelector(".user-welcome");
  const userSmallName = document.querySelector(".user-small-name");
  const notification = document.querySelector(".notifications");

  const json =
    '{"name": "Gabriel", "lastName": "Paneca", "userName": "@gpaneca3692", "icon": "url(../images/dog-3431913_640.jpg)"}';
  const object = JSON.parse(json);

  //put the name  on the user name spaces
  userSmallName.childNodes.item(
    1
  ).textContent = `${object.name} ${object.lastName}`;

  resizeScreen();

  //Change name if the width ise lower that 830px
  window.addEventListener("resize", () => {
    resizeScreen();
  });

  //blocked content when press open-sidebar
  document.addEventListener("click", (event) => {
    if (sidebar.classList.contains("open")) {
      var targetElement = event.target;
      if (!sidebar.contains(targetElement)) {
        sidebar.classList.toggle("open");
      }
      const blockRightSide = document.querySelector(".block-right");
      container.removeChild(blockRightSide);
    }
  });

  // opens sidebar when open-sidebar menu is clicked
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.toggle("open");
    const blockRightSide = document.createElement("div");
    blockRightSide.classList.add("block-right");
    container.appendChild(blockRightSide);
    setSidebarHeight();
  });

  // stop event from bubbling up to the body
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  function setSidebarHeight() {
    const size = document.body.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (size.width <= 740 && windowHeight <= 610) {
      sidebar.style.minHeight = size.height + "px";
    } else {
      sidebar.style = "";
    }
  }

  //function for change the name in the user welcome
  function resizeScreen() {
    if (document.documentElement.clientWidth < 830) {
      userWelcome.childNodes.item(3).textContent = `${object.name}`;

      // notification.parentNode.removeChild(notification);
      // lowerHeader.insertBefore(notification, lowerHeader.children[2]);
    } else {
      userWelcome.childNodes.item(
        3
      ).textContent = `${object.name} ${object.lastName} (${object.userName})`;

      // notification.parentNode.removeChild(notification);
      // upperHeader.insertBefore(notification, upperHeader.children[2]);
    }
  }
});
