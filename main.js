if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log(reg))
    .catch((err) => console.log(err));
}

const changeColor = () => {
  const color1 = document.querySelector("#color-1").value;
  const color2 = document.querySelector("#color-2").value;
  const colorName1 = document.querySelector("#colorName1");
  const colorName2 = document.querySelector("#colorName2");

  colorName1.innerHTML = color1;
  colorName2.innerHTML = color2;

  const gradientArea = document.querySelector("#gradient-area");

  gradientArea.style.background = `linear-gradient(to right, ${color1}, ${color2} )`;
};

document.getElementById("color-1").addEventListener("input", changeColor);
document.getElementById("color-2").addEventListener("input", changeColor);
