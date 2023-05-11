var countDownDate = new Date("March 19, 2023 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const cont = document.querySelector(".panel");
function createCards(data) {
  data.forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("card");
    div.innerHTML = `<img src="${item.image}" class="productimg"><h5>${item.title}</h5><p>$${item.price}</p><p>&#9733;${item.rating.rate}</p>`;

    cont.appendChild(div);
  });
}
const url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.data);

    createCards(data);
  });
function low() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const lowprd = data.filter((item) => item.price < 100);
      cont.innerHTML = "";

      createCards(lowprd);
    });
}
function medium() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const medprd = data.filter(
        (item) => item.price > 100 && item.price < 300
      );
      cont.innerHTML = "";

      createCards(medprd);
    });
}
function high() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const highprd = data.filter((item) => item.price > 300);
      cont.innerHTML = "";

      createCards(highprd);
    });
}
