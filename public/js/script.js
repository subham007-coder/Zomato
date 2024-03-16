// search box
const itemBox = document.querySelector(".item-box");

const input = document.querySelector("#searchInput");

let clutter = "";

input.addEventListener("input", () => {
  axios.get(`/title/${input.value}`).then(function (data) {
      clutter = "";

    data.data.forEach((item) => {
      itemBox.style.visibility = "visible";
      clutter += `<div class="item">
          <img
          src=${item.image}
          alt=""
          />
          <div class="text-box">
            <h5>${item.title}</h5>
            <p>${item.location}</p>
            <p>${item.time}</p>
            </div>
            </div>`;
    });
    itemBox.innerHTML = clutter;
  });
});

// cart add
let addIcon = document.querySelector(".fa-cart-plus");
let addCart = document.querySelector(".add-cart");

// notifications
let notifications = document.querySelector(".noti");

let counter = "";

addCart.addEventListener("click", () => {
  addIcon.classList.remove("fa-cart-plus");
  addIcon.classList.add("fa-circle-check");

  addCart.classList.remove("btn-outline-info");
  addCart.classList.add("btn-success");
  counter++;
  console.log(counter);
  notifications.classList.remove("visually-hidden");
  notifications.innerHTML = counter;
});

// a tag in add to cart

let addA = document.querySelector(".target-button");

addA.addEventListener("click", (e) => {
  e.preventDefault()
})