document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.currentTarget.nextElementSibling.classList.toggle('show');
        });
    });      
});

let popup = document.getElementById("popup");
let popupContent = document.getElementById("popup-content");
let iframe = document.getElementById("spreadsheet");
let spreadsheets = [
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu_hHm_4GTaLlOHBILQ-xK4CnDYpO4O0Hqz-3vJ9NwoUAAv5r9U8vAxg7cUIdgSyuejdtShyiCv_DY/pubhtml?rm=minimal&gid=1001675976&single=true&widget=true&headers=false",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpecI3p684bu6eF25W0DaTnGNom9Lt60XmRZFIErmPsW87ZID_prReuDe_gXM47_S3aiC2CtXUIeps/pubhtml?rm=minimal&gid=0&single=true&widget=true&headers=false",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgzBd_zAxOR3CoxoF4GsHtA9XQDlNyipNfsmLpWFbHdN7ywb94y-hP1hDmI9s1H5k1dSCYU3s2Q76I/pubhtml?rm=minimal&gid=0&single=true&widget=true&headers=false"
  ];

function setPopupSize() {
  let width = window.innerWidth * 0.9;
  let height = window.innerHeight * 0.9;

  popupContent.style.maxWidth = `${width}px`;
  popupContent.style.maxHeight = `${height}px`;
}

function openPopup(sheetIndex) {
  setPopupSize();
  iframe.src = spreadsheets[sheetIndex - 1];
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

window.addEventListener("resize", setPopupSize);

  

// let popup = document.getElementById("popup");
// let popupContent = document.getElementById("popup-content");
// let iframe = document.getElementById("spreadsheet");
// let spreadsheets = [
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu_hHm_4GTaLlOHBILQ-xK4CnDYpO4O0Hqz-3vJ9NwoUAAv5r9U8vAxg7cUIdgSyuejdtShyiCv_DY/pubhtml?gid=1001675976&amp;single=true&amp;widget=true&amp;headers=false",
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpecI3p684bu6eF25W0DaTnGNom9Lt60XmRZFIErmPsW87ZID_prReuDe_gXM47_S3aiC2CtXUIeps/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false",
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgzBd_zAxOR3CoxoF4GsHtA9XQDlNyipNfsmLpWFbHdN7ywb94y-hP1hDmI9s1H5k1dSCYU3s2Q76I/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
// ];

// function openPopup(sheetIndex) {
//   iframe.src = spreadsheets[sheetIndex - 1];
//   popup.classList.remove("hidden");
// }

// function closePopup() {
//   popup.classList.add("hidden");
// }


  