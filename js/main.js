document.getElementById("color").addEventListener("click", ChangeBackground);
function ChangeBackground() {
  const symbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  document.getElementById("hexa").innerHTML = color;
  document.body.style.background = color;
}
