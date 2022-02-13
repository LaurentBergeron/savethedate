$(window).scroll(function() {
    if ($(window).scrollTop() < 1700) {
        $(".background").addClass("img1")
        $(".background").removeClass("img2")
        $(".background").removeClass("img3")
    } else if ($(window).scrollTop() < 4000) {
        $(".background").addClass("img2")
        $(".background").removeClass("img1")
        $(".background").removeClass("img3")
    } else {
        $(".background").addClass("img3")
        $(".background").removeClass("img1")
        $(".background").removeClass("img2")
    }
  }
);