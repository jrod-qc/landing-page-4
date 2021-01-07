// This is the quote Modal

$(".hero-btn").on("click", function() {
    var heroBtn = $(".hero-btn");
    var quoteModal = $(".quote-modal");


    if (heroBtn == heroBtn) {
        quoteModal.show();
        quoteModal.css("display", "flex");

    } else {
        console.log("something Went Wrong");
    }
})

$(".exitIcon").on("click", function() {
    var quoteModal = $(".quote-modal");
    var exitIcon = $(".exitIcon");


    if (exitIcon == exitIcon) {
        quoteModal.hide();

    } else {
        console.log("something Went Wrong");
    }
})


$(".main-logo-outside").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);

})

$(".close-btn").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);
})


// This is the benefits counts section
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

        {
            duration: 6000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});

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


// This is the learn 5 minutes Section 
// poster frame click event
$(document).on('click', '.js-videoPoster', function(ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');
    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src', src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
    // if we're stopping all videos on page
    if (!$wrapper) {
        var $wrapper = $('.js-videoWrapper');
        var $iframe = $('.js-videoIframe');
        // if we're stopping a particular video
    } else {
        var $iframe = $wrapper.find('.js-videoIframe');
    }
    // reveal poster
    $wrapper.removeClass('videoWrapperActive');
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr('src', '');
}