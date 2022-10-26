/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// var btn = document.querySelector(".dropbtn");
// btn.addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
export let header = {
  data() {
    return {};
  },
  template: `
  <header id="header">
  <div class="container">
    <div class="header_content">
      <div class="logo">
        <a href="#main_first"
          ><img src="img/ia-logo.png" alt="ialogo"
        /></a>
      </div>
      <nav>
        <ul class="menu_link">
          <li class="menu_item"><a href="#">О компание </a></li>
          <li class="menu_item"><a href="#main_third">Услуги</a></li>
          <li class="menu_item"><a href="#">Подход к работе</a></li>
          <li class="menu_item">
            <span class="dropbtn">Проекты</span>
            <div id="myDropdown" class="dropdown-content">
              <a
                id="droplink"
                href="https://abdulloev19.github.io/facemash.tj/"
                >Facemash tj</a
              >
              <br />
              <a
                id="droplink"
                href="https://abdulloev19.github.io/onlineshop/"
                >Online shop</a
              ><br />
              <a
                id="droplink"
                href="https://abdulloev19.github.io/porten/"
                >Porten</a
              >
            </div>
          </li>
          <li class="menu_item"><a href="#">Клиенты</a></li>
          <li class="menu_item"><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  `
};
