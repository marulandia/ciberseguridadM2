
    $(document).ready(function () {
      $(".ver-ejemplo").click(function () {
        const index = $(this).data("id");
        $("#carruselAmenazas").removeClass("d-none").hide().fadeIn();
        const carousel = $("#carouselAmenazas");
        carousel.find(".carousel-item").removeClass("active");
        carousel.find(".carousel-item").eq(index).addClass("active");
      });
    });
