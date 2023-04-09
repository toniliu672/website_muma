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
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgzBd_zAxOR3CoxoF4GsHtA9XQDlNyipNfsmLpWFbHdN7ywb94y-hP1hDmI9s1H5k1dSCYU3s2Q76I/pubhtml?rm=minimal&gid=0&single=true&widget=true&headers=false",
    "https://drive.google.com/uc?export=view&id=1o2ziF2I2DW1OqHRCNpNa7xmtQlPUrF0H"
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


// Diagram batang arus kas
const cashFlowChart = new Chart(document.getElementById("cashFlowChart"), {
  type: "bar",
  data: {
    labels: ["31 Maret", "1 April", "2 April", "3 April"],
    datasets: [
      {
        label: "Uang Masuk (Rp)",
        data: [40000, 100000, 40500, 570000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pengeluaran (Rp)",
        data: [0, 100000, 0, 150000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Saldo Akhir (Rp)",
        data: [0 ,0 , 0, 500500],
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        borderColor: "rgba(255, 193, 7, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Diagram lingkaran pendapatan dan pengeluaran
const incomeExpenseChart = new Chart(document.getElementById("incomeExpenseChart"), {
  type: "doughnut",
  data: {
    labels: ["Pendapatan", "Pengeluaran"],
    datasets: [
      {
        data: [300500, 200000], // Contoh data
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  },
});

// efek scrolling
// JavaScript
$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// JavaScript
$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var timelineBlocks = document.querySelectorAll('.timeline-block');

  function animateTimelineBlocks() {
    for (var i = 0; i < timelineBlocks.length; i++) {
      var blockOffsetTop = timelineBlocks[i].offsetTop;
      var blockHeight = timelineBlocks[i].offsetHeight;

      if (window.pageYOffset + window.innerHeight > blockOffsetTop + blockHeight / 2) {
        timelineBlocks[i].style.opacity = '1';
        timelineBlocks[i].style.transform = 'translateY(0)';
      } else {
        timelineBlocks[i].style.opacity = '0';
        timelineBlocks[i].style.transform = 'translateY(50px)';
      }
    }
  }

  animateTimelineBlocks();
  window.addEventListener('scroll', animateTimelineBlocks);
});

  