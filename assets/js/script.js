document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const menu = document.querySelector(".open-sidebar");
  const sidebar = document.querySelector("aside");
  const upperHeader = document.querySelector(".upper-header");
  const lowerHeader = document.querySelector(".lower-header");
  const userWelcome = document.querySelector(".user-welcome");
  const userSmallName = document.querySelector(".user-small-name");
  const userSmallLogo = document.querySelector(".user-small-logo");
  const userLogo = document.querySelector(".user-logo");
  const notification = document.querySelector(".notifications");

  const json =
    '{"name": "Gabriel", "lastName": "Paneca", "userName": "@gpaneca3692", "icon": "url(../assets/images/dog-3431913_640.jpg)"}';
  const objectJson = JSON.parse(json);

  //put the name  on the user name spaces and the user ico on the buttons
  userSmallName.childNodes.item(
    1
  ).textContent = `${objectJson.name} ${objectJson.lastName}`;

  userSmallLogo.childNodes.item(1).style.backgroundImage = objectJson.icon;
  userLogo.style.backgroundImage = objectJson.icon;

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
      userWelcome.childNodes.item(3).textContent = `${objectJson.name}`;

      // notification.parentNode.removeChild(notification);
      // lowerHeader.insertBefore(notification, lowerHeader.children[2]);
    } else {
      userWelcome.childNodes.item(
        3
      ).textContent = `${objectJson.name} ${objectJson.lastName} (${objectJson.userName})`;

      // notification.parentNode.removeChild(notification);
      // upperHeader.insertBefore(notification, upperHeader.children[2]);
    }
  }
});
