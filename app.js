const submit = document.getElementById("send");
const divim = document.querySelector(".left");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  //   alert("Sendledin");
  createdDiv();
});

function createdDiv() {
  const width = document.querySelector("#width").value;
  const height = document.querySelector("#height").value;
  const color = document.querySelector("#colors").value;
  const border = document.querySelector("#border").value;
  const back_color = document.querySelector("#back-color").value;
  const border_type = document.querySelector("#border_type").value;
  const border_color = document.querySelector("#border_color").value;
  const margin = document.querySelector("#margin").value;
  const padding = document.querySelector("#padding").value;
  const rotate = document.getElementById("rotate").value;
  const radius = document.getElementById("radius").value;

  divim.style.width = `${width}rem`;
  divim.style.height = `${height}rem`;
  divim.style.color = `${color}`;
  divim.style.backgroundColor = `${back_color}`;
  divim.style.border = `${border} ${border_type} ${border_color}`;
  divim.style.margin = `${margin}px`;
  divim.style.padding = `${padding}px`;
  divim.style.borderRadius = `${radius}`;
  divim.style.transform = `rotate(${rotate}deg)`;
  divim.style.display = "block";
}
