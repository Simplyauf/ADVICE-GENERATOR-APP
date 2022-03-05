const AdviceText = document.querySelector(".AdviceText");
const AdviceId = document.querySelector(".AdviceId");
const AdviceBtnCont = document.querySelector(".BtnCont");
const AdviceBtn = document.querySelector(".AdviceBtn");

window.addEventListener("DOMContentLoaded", () => getAdviceObj());

let adviceApi = "https://api.adviceslip.com/advice";

function getResponse(adviceApi) {
  return fetch(adviceApi).then((response) => response.json());
}
const API = { getResponse };

function getAdviceObj() {
  API.getResponse(adviceApi).then((data) => DisplayAdvice(data["slip"]));
}

function DisplayAdvice(adviceData) {
  AdviceText.innerHTML = adviceData.advice;
  AdviceId.innerHTML = `#${adviceData.id}`;
}

AdviceBtn.addEventListener("click", () => getAdviceObj());
