$(window).scroll(function() {
    if ($(window).scrollTop() < 1200) {
        $("body").addClass("img1")
        $("body").removeClass("img2")
        $("body").removeClass("img3")
    } else if ($(window).scrollTop() < 3000) {
        $("body").addClass("img2")
        $("body").removeClass("img1")
        $("body").removeClass("img3")
    } else {
        $("body").addClass("img3")
        $("body").removeClass("img1")
        $("body").removeClass("img2")
    }
  }
);