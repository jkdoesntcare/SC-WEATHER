function city(event) {
  event.preventDefault();
  let form = document.querySelector("#search-form");
  let h1search = document.querySelector("#h1search");
  h1search.innerHTML = form.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("Submit", city);
