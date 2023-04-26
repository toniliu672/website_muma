document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector(".grid");

    // Menunggu semua gambar selesai dimuat
    imagesLoaded(grid, function () {
        // Inisialisasi Masonry
        new Masonry(grid, {
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
            gutter: 20,
            percentPosition: true,
        });
    });
});

