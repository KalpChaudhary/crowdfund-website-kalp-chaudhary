"use strict";
//? For modal active box-------------
const subBox = document.querySelectorAll("#subBox");
const modalPledgeBox = document.querySelectorAll("#modalPledgeBox");
const radios = document.querySelectorAll(".radio");
const radioInside = document.querySelectorAll("#radioInside");

//? For progress bar------------------
const progressBar = document.querySelector("#progressBar");

//? Modal pop up ----------------------

const btnBack = document.querySelector(".btnBack");
const btnClose = document.querySelector("#btnClose");
const btnGotIt = document.querySelector("#btnGotIt");
const btnBookmark = document.querySelector("#btnBookmark");
const ancBook = document.querySelector("#ancBook")

const modalPledge = document.querySelector(".modal-pledge");
const modalThanks = document.querySelector(".modal-thanks");

// ? Updating values

const parentElement = document.querySelectorAll("#continueParent");

const amount = document.querySelector(".amount");
const people = document.querySelector(".people");

//? Default values ---------------------

let amountDefault = 89914;
let backersTotal = 5007;
let radioBtn = false;
const totalAmount = 100000;


// ? Progressbar update fn
const updateProgressBar = function () {
  const percentage = (amountDefault / totalAmount) * 100;
  progressBar.style.width = `${percentage}%`;
};

updateProgressBar();


btnBookmark.addEventListener("click", function () {

    btnBookmark.classList.toggle("active");

    if(btnBookmark.classList.contains("active")){
        ancBook.innerHTML = "Bookmarked"
    }
    else{
        ancBook.innerHTML = "Bookmark"

    }
})

radios.forEach((radio) => {
  radio.addEventListener("click", updateRadioEvents);
});

function updateRadioEvents(e) {
  const dataVal = e.target.getAttribute("data-val");

  radioInside.forEach((radIns) => {
    if (radIns.getAttribute("data-val") === dataVal) {
      radIns.classList.toggle("active");
    }
  });
  modalPledgeBox.forEach((modBox) => {
    if (modBox.getAttribute("data-val") === dataVal) {
      modBox.classList.toggle("active");
    }
  });
  subBox.forEach((sb) => {
    if (sb.getAttribute("data-val") === dataVal) {
      sb.classList.toggle("active");
    }
  });
}

btnBack.addEventListener("click", updateModalOpen);
btnClose.addEventListener("click", updateModalClose);

function updateModalOpen() {
  modalPledge.classList.add("active");
}
function updateModalClose() {
  modalPledge.classList.remove("active");
}

function modalThanksOpen(){
    modalThanks.classList.add("active");
}

function modalThanksClose(){
    modalThanks.classList.remove("active");
}

btnGotIt.addEventListener("click", modalThanksClose);

parentElement.forEach((element) => {
//   console.log(element.childNodes);
  const inp = element.childNodes[1];
  const anc = element.childNodes[3];
  if(!inp && !anc)return;
//   console.log(inp, anc);

  anc.addEventListener("click", function(e) {
      if(!inp.value)return;

      amountDefault += +inp.value;
      backersTotal++;

      updateValues(amountDefault,backersTotal);
      updateProgressBar();
      updateModalClose();
      modalThanksOpen();
  });

});

function updateValues(amt,ppl){
    amount.innerHTML = `${amt}`;
    people.innerHTML = `${ppl}`;
}
