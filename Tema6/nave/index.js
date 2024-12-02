let interval

window.addEventListener("DOMContentLoaded", () => {
  const nave = document.querySelector("#nave");
  const disparo = document.querySelector("#disparo");

  let naveX = 0;
  let disparoX = 60;
  let disparoY = 128;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      if (parseInt(naveX) === 0) return
      naveX = parseInt(naveX) - 64;
    } else if (e.key === "ArrowRight") {
      if (parseInt(naveX) + 128 >= document.body.clientWidth) return
      naveX = parseInt(naveX) + 64;
    }

    if (e.key === "Enter") {
      if (interval) clearInterval(interval);
      disparoY = 128;

      disparoX = naveX + 60;
      disparo.style.left = disparoX;

      disparo.style.bottom = disparoY + "px";

      disparo.style.display = "block";

      interval = setInterval(() => {
        disparoY += 5;
        disparo.style.bottom = disparoY + "px";
        if (disparoY >= document.body.clientHeight) {
          clearInterval(interval);
          disparo.style.display = "none";
        }
      }, 20)
    }


    nave.style.left = naveX;
    disparo.style.left = disparoX;
  })
})