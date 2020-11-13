$(".main-logo-outside").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);

})

$(".close-btn").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);
})


setInterval(function() {
    const howItWorks = $(".hiw-1");
    const howItWorks2 = $(".hiw-2");
    const howItWorks3 = $(".hiw-3");
    const howItWorks4 = $(".hiw-4");

    if (howItWorks.is(":hover")) {
        $(".hiw-1-hover").css("display", "block");
        $(".hiw-2-hover").css("display", "none");
        $(".hiw-3-hover").css("display", "none");
        $(".hiw-4-hover").css("display", "none");
    } else if (howItWorks2.is(":hover")) {
        $(".hiw-2-hover").css("display", "block");
        $(".hiw-1-hover").css("display", "none");
        $(".hiw-3-hover").css("display", "none");
        $(".hiw-4-hover").css("display", "none");
    } else if (howItWorks3.is(":hover")) {
        $(".hiw-3-hover").css("display", "block");
        $(".hiw-1-hover").css("display", "none");
        $(".hiw-2-hover").css("display", "none");
        $(".hiw-4-hover").css("display", "none");
    } else if (howItWorks4.is(":hover")) {
        $(".hiw-4-hover").css("display", "block");
        $(".hiw-1-hover").css("display", "none");
        $(".hiw-2-hover").css("display", "none");
        $(".hiw-3-hover").css("display", "none");
    } else {
        $(".hiw-1-hover").css("display", "none");
        $(".hiw-2-hover").css("display", "none");
        $(".hiw-3-hover").css("display", "none");
        $(".hiw-4-hover").css("display", "none");
    }
}, 200);