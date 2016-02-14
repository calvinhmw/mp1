var videoAsRatio = 1280 / 720;
var $root = $('html body');

$(document).ready(function () {

    var newwidth = $(window).width();
    var newheight = $(window).height();
    $("#home").css({"height": newheight, "width": newwidth});

    var videoheight = $("#background-video").height();
    var videowidth = $("#background-video").width();
    var homewidth = $("#home").width();
    var homeheight = $("#home").height();
    //console.log("home height: "+homeheight);
    //console.log("home width: "+homewidth);
    //console.log("video width: "+videowidth);
    //console.log("video height: "+videoheight);


    var homeAsRatio = homewidth / homeheight;

    if (videoAsRatio > homeAsRatio) {
        $("#background-video").css({"height": homeheight});
        //console.log("yes");
    } else {
        $("#background-video").css({"width": homewidth});
    }
    //$("section").css({"min-height": 0.8 * $(window).height()});
    $("section").css({"min-height": 0.9*$(window).height()});

    $("#footer-home").css({"min-height": 0.15 * $(window).height()});

    animate_carousel();
    animate_modal();
    smooth_scroll();
    navbar_effect_on_scroll();
});


// need to find a new way to resize window

$(window).resize(function () {
    var oldHomewidth = $("#home").width();
    var oldHomeheight = $("#home").height();
    var oldHomeAsRatio = oldHomewidth / oldHomeheight;

    $("#home").css({"width": $(window).width(), "height": $(window).height()});

    var videoheight = $("#background-video").height();
    var videowidth = $("#background-video").width();

    var homewidth = $("#home").width();
    var homeheight = $("#home").height();
    var homeAsRatio = homewidth / homeheight;


});

function animate_carousel() {
    var num_carousels = $(".carousel-content").length;
    $("#carousel-0").addClass('active');
    $(".carousel-arrow").click(function () {
        var $curActive = $(".carousel-content.active");

        // hack, for some reasons if click too fast none of the element becomes active.
        if ($curActive.length == 0) {
            console.log("no carousel is active now");
            $("#carousel-0").addClass('active');
            $curActive = $(".carousel-0");
        }
        var curActiveIdx = parseInt($curActive.attr("id").split('-')[1]);
        var dir = $(this).attr("id").split('-')[1];
        var nextIdx = curActiveIdx;
        if (dir == "l") {
            nextIdx = curActiveIdx + 1;
        } else if (dir == "r") {
            nextIdx = curActiveIdx - 1;
        }
        nextIdx = nextIdx % num_carousels;
        if (nextIdx < 0) nextIdx = num_carousels - 1;

        var $nextActive = $("#carousel-" + nextIdx);
        $curActive.addClass(dir == "l" ? "go-left" : "go-right");
        $nextActive.addClass("active").addClass(dir == "l" ? "right-arrive" : "left-arrive");
        //console.log($curActive);
        //console.log($nextActive);

        $curActive.one("animationend", function () {
            $curActive.removeClass("active go-left go-right");
        });
        $nextActive.one("animationend", function () {
            $nextActive.removeClass("right-arrive left-arrive");
        });
        return false;
    });
}


function animate_modal() {

    $(".carousel-image").click(function (e) {
        var thisId = $(this).attr("id");
        var $modalLayer= $("#modal-layer");
        //$modalLayer.show();
        var $modal_id = thisId+"-modal";
        $("#"+$modal_id).fadeIn(500, 'swing');
        $modalLayer.fadeIn(500, 'swing');
        e.stopPropagation();
    });

    $(".modal").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function(){
        $(".modal").each(function(){
            $(this).fadeOut(200, 'swing');
        });
        if(!$("#modal-layer").is(":hidden")) {
            $("#modal-layer").fadeOut(100, 'swing');
        }
    });

    $(".modal-footer").click(function(){
        $(".modal").each(function(){
            $(this).fadeOut(200, 'swing');
        });
        if(!$("#modal-layer").is(":hidden")) {
            $("#modal-layer").fadeOut(100, 'swing');
        }
    });
}


function smooth_scroll() {
    $("#nav-list li").click(function(event){
        var scrollTo = $(this).attr('id').split('-')[2];
        //console.log(scrollTo);
        //$('html body')
        $root.animate({
            scrollTop: $('#' + scrollTo).offset().top
        }, 600);
        event.preventDefault();
    });
}

function navbar_effect_on_scroll() {
    $(window).scroll(function(){
        //console.log('scroll');
        var curPos = $(document).scrollTop();
        var bannerPos = $('#banner').offset().top;
        var homePos = $('#home').offset().top;
        var aboutPos = $('#about').offset().top;
        var eduPos = $('#education').offset().top;
        var projectsPos = $('#projects').offset().top;
        var skillsPos = $('#skills').offset().top;

        //console.log('curpos: '+curPos);
        //console.log('home: '+ homePos);
        //console.log('about: '+ aboutPos);
        //console.log('edu: '+eduPos);
        //console.log('projects: '+projectsPos);
        //console.log('skills: '+skillsPos);

        if(curPos>=bannerPos) {
            $('#nav-bar').removeClass("navbar-invisible").addClass("navbar-visible");
        }else{
            $('#nav-bar').removeClass("navbar-visible").addClass("navbar-invisible");
        }

        if(curPos>=aboutPos) {
            //console.log('nav bar ready to resize!');
            $('#nav-bar').removeClass("navbar-normal").addClass("navbar-small");
        }else{
            $('#nav-bar').removeClass("navbar-small").addClass("navbar-normal");
        }




        if(curPos>=homePos && curPos<aboutPos) {
            $('#scroll-to-home').addClass('navbar-position-indicator');
        }else{
            $('#scroll-to-home').removeClass('navbar-position-indicator');
        }

        if(curPos>=aboutPos && curPos<eduPos) {
            $('#scroll-to-about').addClass('navbar-position-indicator');
        }else{
            $('#scroll-to-about').removeClass('navbar-position-indicator');
        }

        if(curPos>=eduPos && curPos<projectsPos) {
            $('#scroll-to-education').addClass('navbar-position-indicator');
        }else{
            $('#scroll-to-education').removeClass('navbar-position-indicator');
        }

        if(curPos>=projectsPos && curPos<skillsPos) {
            $('#scroll-to-projects').addClass('navbar-position-indicator');
        }else{
            $('#scroll-to-projects').removeClass('navbar-position-indicator');
        }

        if(curPos>=skillsPos) {
            $('#scroll-to-skills').addClass('navbar-position-indicator');
        }else{
            $('#scroll-to-skills').removeClass('navbar-position-indicator');
        }

    });
}









