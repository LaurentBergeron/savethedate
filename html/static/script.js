$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $("body").addClass("img3")
        $("body").removeClass("img4")
    }else{
    $("body").addClass("img4")
     $("body").removeClass("img3")
    }
  });