 const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const portfolio = document.getElementById("portfolio");
    const arrowdown = document.getElementById("arrowdown");

    hamburger.addEventListener("click", function ()  {
      nav.style.right = "0px";
      hamburger.style.display = "none";

      nav.classList.toggle("max-md:hidden");

    });

    portfolio.addEventListener("click",  () => {
      arrowdown.style.rotate = '180deg';
    });
