function initChart31Mar3Apr() {
    // Kode untuk membuat grafik 31 Mar - 3 Apr di sini
    // cashFlowChart dan incomeExpenseChart
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
                    label: "Saldo (Rp)",
                    data: [40000, 40000, 80500, 500500],
                    backgroundColor: "rgba(255, 193, 7, 0.2)",
                    borderColor: "rgba(255, 193, 7, 1)",
                    borderWidth: 1,
                },
            ],
        },
    });

    // Diagram lingkaran pendapatan dan pengeluaran
    let saldo1 = 750500 - 250000
    const incomeExpenseChart = new Chart(document.getElementById("incomeExpenseChart"), {
        type: "doughnut",
        data: {
            labels: ["Saldo", "Pengeluaran"],
            datasets: [
                {
                    data: [saldo1, 250000], // Contoh data
                    backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
                    borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
            ],
        },
    })
    cashFlowChart();
    incomeExpenseChart();
}

function initChart10Apr13Apr() {
    // Kode untuk membuat grafik 10 Apr - 13 Apr di sini
    // createBarChart() dan createCircleChart()
    let pemasukan = 400000;
    let Saldo = 500500;
    let pengeluaran = 250000;
    let saldoAkhir = Saldo - pengeluaran;

    // Fungsi untuk membuat diagram batang
    function createBarChart() {
        const ctx = document.getElementById("barChart").getContext("2d");
        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["10 April", "11 April", "12 April", "13 April"],
                datasets: [
                    {
                        label: "Uang Masuk (Rp)",
                        data: [0, 500000, 180000, 0],
                        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                        borderColor: ["rgba(75, 192, 192, 1)"],
                        borderWidth: 1,
                    },
                    {
                        label: "Pengeluaran (Rp)",
                        data: [250000, 500000, 46000, 82000],
                        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                        borderColor: ["rgba(255, 99, 132, 1)"],
                        borderWidth: 1,
                    },
                    {
                        label: "Saldo (Rp)",
                        data: [250500, (250500 + 500000) - 500000, (250500 + 180000) - 46000, 384500 - 82000],
                        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
                        borderColor: ["rgba(255, 206, 86, 1)"],
                        borderWidth: 1,
                    },
                ],

            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Fungsi untuk membuat diagram lingkaran
    function createCircleChart() {
        const ctx = document.getElementById("circleChart").getContext("2d");

        let uangAwal = 500500;
        let uangMasuk = 380000 + 180000 + 50000 + 50000 + 20000;
        let uangKeluar = 250000 + 400000 + 100000 + 46000 + 50000 + 10000 + 22000
        let Saldo = uangAwal + uangMasuk - uangKeluar;

        const chart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Saldo (Rp)", "Pengeluaran (Rp)",],
                datasets: [
                    {
                        data: [Saldo, uangKeluar],
                        backgroundColor: [
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(255, 99, 132, 0.2)",

                        ],
                        borderColor: [
                            "rgba(75, 192, 192, 1)",
                            "rgba(255, 99, 132, 1)",

                        ],
                        borderWidth: 1,
                    },
                ],
            },
        });
    }
    // Panggil fungsi untuk membuat diagram
    createBarChart();
    createCircleChart();
}

function initLaporanAkhir() {

    // Mengakses elemen canvas menggunakan ID
    const ctx = document.getElementById("myChart").getContext("2d");

    // Membuat grafik garis progresif dengan easing
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["31 Mar", "1 Apr", "2 Apr", "3 Apr", "10 Apr", "11 Apr", "12 Apr", "13 Apr"],
            datasets: [
                {
                    label: "Saldo",
                    data: [40000, 40000, 80500, 500500, 250500, 250500, 384500, 302500],
                    borderColor: "rgba(255, 206, 86, 1)",
                    backgroundColor: "rgba(255, 206, 86, 0.2)",
                    tension: 0.4,
                },
                {
                    label: "Pengeluaran",
                    data: [0, 100000, 0, 150000, 250000, 500000, 46000, 82000],
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    tension: 0.4,
                    hidden: true,
                },
                {
                    label: "Pendapatan",
                    data: [40000, 100000, 40500, 570000, 0, 500000, 180000, 0],
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.4,
                    hidden: true,
                }
            ],
        },
        options: {
            animation: {
                easing: "easeInOutQuad",
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
    myChart();
}




document.addEventListener('DOMContentLoaded', function () {
    const chartButtons = document.querySelectorAll('.chart-btn');
    const chartContent = document.querySelector('.chart-content');
    function changeChartContent(chartName) {
        chartContent.innerHTML = '';

        if (chartName === 'laporan-akhir') {
            // Tampilkan konten Laporan Akhir
            chartContent.innerHTML = `
            <div>
                <h3 class="sub-judul">Laporan Akhir</h3>
            </div>
            <div class="dashboard">
                <div class="chart-container">
                    <canvas id="myChart"></canvas>
                </div>
            </div>`;
            initLaporanAkhir();
        } else if (chartName === '31-mar-3-apr') {
            // Tampilkan konten 31 Mar - 3 Apr
            chartContent.innerHTML = `
            <!-- Tempatkan konten grafik Anda di sini -->
            <div>
              <h3 class="sub-judul">Arus Kas <br> 31 Mar - 3 Apr</h3>
            </div>
            <div class="dashboard">
              <div class="chart-container">
                <canvas id="cashFlowChart"></canvas>
              </div>
              <div class="chart-container">
                <canvas id="incomeExpenseChart"></canvas>
              </div>
            </div>`;
            initChart31Mar3Apr();
        } else if (chartName === '10-apr-13-apr') {
            // Tampilkan konten 10 Apr - 13 Apr
            chartContent.innerHTML = `

            <div>
            <h3 class="sub-judul">Arus Kas <br> 10 - 13 Apr</h3>
          </div>
          <div class="dashboard">
            <!-- Diagram Batang -->
            <div class="chart-container">
              <canvas id="barChart"></canvas>
            </div>
            <!-- Diagram Lingkaran -->
            <div class="chart-container">
              <canvas id="circleChart"></canvas>
            </div>
            <br>
          </div>`;
            initChart10Apr13Apr();
        }
    }

    function handleChartButtonClick(e) {
        const chartName = e.target.dataset.chart;
        changeChartContent(chartName);
    }

    chartButtons.forEach((btn) => btn.addEventListener('click', handleChartButtonClick));

    // Tampilkan konten Laporan Akhir saat pertama kali
    changeChartContent('laporan-akhir');
});

// Iframe Spreadsheet
$(document).ready(function () {
    // Menampilkan iframe ketika tombol "Dokumen S-Sheet" diklik
    $("#sheet-btn").on("click", function () {
        $("#iframe-container").fadeIn("fast");
    });

    // Menyembunyikan iframe ketika tombol "x" diklik
    $("#close-btn").on("click", function () {
        $("#iframe-container").fadeOut("fast");
    });
});