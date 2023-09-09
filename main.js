const white = document.querySelector(".white");
const black = document.querySelector(".black");
const calcu = document.querySelector(".calculator");
const dropDown = document.querySelector(".drop-down");
const color5 = document.getElementsByClassName("color5", []);
const btns = document.querySelectorAll("button");
const result = document.querySelector("#result");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
      result.innerHTML = "";
    } else if (e.target.textContent === "X") {
      result.innerHTML = result.innerHTML.slice(0, -1);
    } else if (e.target.textContent === "=") {
      result.innerHTML = eval(result.innerHTML);
    } else if (e.target.textContent === "%") {
      result.innerHTML = result.innerHTML / 100;
    } else {
      result.innerHTML += e.target.textContent;
    }
  });
});

white.addEventListener("click", () => {
  black.style.display = "block";
  white.style.display = "none";
  calcu.style.backgroundColor = "#202427";
  dropDown.style.color = "white";
  result.style.backgroundColor = "#2C2C2A";
  result.style.color = "white";
  Array.from(color5).forEach((elem) => {
    elem.style.backgroundColor = "#2C2C2A";
    elem.style.color = "white";
  });
});
black.addEventListener("click", () => {
  black.style.display = "none";
  white.style.display = "block";
  calcu.style.backgroundColor = "white";
  dropDown.style.color = "black";
  result.style.backgroundColor = "#b4ebde";
  result.style.color = "black";
  Array.from(color5).forEach((elem) => {
    elem.style.backgroundColor = "#ececec";
    elem.style.color = "black";
  });
});
