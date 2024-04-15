let effctivePageHeight =
  document.body.scrollHeight - document.body.clientHeight;
let scrollDiv = document.querySelector(".scroller");
console.log(effctivePageHeight);
window.onscroll = function () {
  let currentHeight = document.body.scrollTop;
  let percantage = (currentHeight / effctivePageHeight) * 100;

  //   console.log(currentHeight);
  //   console.log(percantage);

  scrollDiv.style.width = `${percantage}%`;
};
