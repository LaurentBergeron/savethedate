$(window).scroll(function() {
    var total_height = document.body.scrollHeight;
    if (total_height < 1) {
        total_height = 4000
    }
    if ($(window).scrollTop() < total_height/3.0) {
        $(".background").addClass("img1")
        $(".background").removeClass("img2")
        $(".background").removeClass("img3")
    } else if ($(window).scrollTop() < total_height/1.5) {
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