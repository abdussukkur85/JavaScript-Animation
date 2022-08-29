let animatedContainer = document.getElementById("animatedContainer");
let footerAnimation = document.getElementById("footerAnimation");
let btnShopNow = document.getElementById("btnShopNow");
let shortText = document.getElementById("shortText");
let longText = document.getElementById("longText");
let wipesMangoImg = document.getElementById("wipesMangoImg");
let wipesCoconutImg = document.getElementById("wipesCoconutImg");
let mangoImg = document.getElementById("mangoImg");
let flowerImg = document.getElementById("flowerImg");
let coconutImg = document.getElementById("coconutImg");
let lysolImg = document.getElementById("lysolImg");
let bgImage = document.getElementById("bgImage");

document.querySelectorAll(".animation").forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    footerAnimation.style.height = "180px";
    animatedContainer.style.height = "200px";

    btnShopNow.style.position = "absolute";
    btnShopNow.style.top = "60%";
    btnShopNow.style.right = "140px";
    btnShopNow.style.transform = "translateY(50%)";

    shortText.classList.add("animate__backOutDown");
    shortText.style.position = "absolute";
    shortText.style.top = "50%";
    shortText.style.transform = "translateY(-50%)";
    shortText.style.right = "100px";
    shortText.style.width = "150px";

    longText.style.visibility = "visible";
    longText.classList.remove("animate__fadeOut");
    longText.classList.add("animate__fadeInLeft");
    longText.classList.remove("animate__fadeOutLeft");

    wipesMangoImg.style.width = "100px";
    wipesMangoImg.style.bottom = "-15px";
    wipesCoconutImg.style.width = "90px";
    wipesCoconutImg.style.left = "275px";
    wipesCoconutImg.style.bottom = "-15px";

    lysolImg.style.width = "90px";
    lysolImg.style.top = "50px";
    mangoImg.style.width = "50px";
    mangoImg.style.left = "125px";
    flowerImg.style.width = "70px";
    flowerImg.style.left = "80px";
    coconutImg.style.width = "80px";
    coconutImg.style.left = "345px";
    bgImage.style.clipPath = "polygon(0 0, 100% 0%, 33% 41%, 0 41%)";
  });
});

document.querySelectorAll(".animation").forEach((item) => {
  item.addEventListener("mouseleave", (event) => {
    footerAnimation.style.height = "80px";
    animatedContainer.style.height = "100px";

    btnShopNow.style.position = "absolute";
    btnShopNow.style.top = "30%";
    btnShopNow.style.right = "10px";
    btnShopNow.style.transform = "translateY(50%)";

    shortText.classList.remove("animate__backOutDown");
    shortText.classList.add("animate__backInUp");

    shortText.style.position = "absolute";
    shortText.style.top = "30%";
    shortText.style.transform = "translateY(-50%)";
    shortText.style.right = "100px";
    shortText.style.width = "150px";

    longText.classList.remove("animate__fadeOut");
    longText.classList.remove("animate__fadeInLeft");
    longText.classList.add("animate__fadeOutLeft");
    longText.style.visibility = "hidden";

    lysolImg.style.width = "70px";
    lysolImg.style.top = "20px";
    wipesMangoImg.style.width = "62px";
    wipesCoconutImg.style.width = "52px";
    wipesCoconutImg.style.left = "235px";
    mangoImg.style.width = "30px";
    mangoImg.style.left = "145px";
    flowerImg.style.width = "46px";
    flowerImg.style.left = "105px";
    coconutImg.style.left = "275px";
    coconutImg.style.width = "60px";
    bgImage.style.clipPath = "polygon(0 0, 80% 0%, 33% 41%, 0 41%)";
  });
});
