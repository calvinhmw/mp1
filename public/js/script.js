function animate_carousel(){var a=$(".carousel-content").length;$("#carousel-0").addClass("active"),$(".carousel-arrow").click(function(){var b=$(".carousel-content.active");0==b.length&&(console.log("no carousel is active now"),$("#carousel-0").addClass("active"),b=$(".carousel-0"));var c=parseInt(b.attr("id").split("-")[1]),d=$(this).attr("id").split("-")[1],e=c;"l"==d?e=c+1:"r"==d&&(e=c-1),e%=a,0>e&&(e=a-1);var f=$("#carousel-"+e);return b.addClass("l"==d?"go-left":"go-right"),f.addClass("active").addClass("l"==d?"right-arrive":"left-arrive"),b.one("animationend",function(){b.removeClass("active go-left go-right")}),f.one("animationend",function(){f.removeClass("right-arrive left-arrive")}),!1})}function animate_modal(){$(".carousel-image").click(function(a){var b=$(this).attr("id"),c=$("#modal-layer"),d=b+"-modal";$("#"+d).fadeIn(500,"swing"),c.fadeIn(500,"swing"),a.stopPropagation()}),$(".modal").click(function(a){a.stopPropagation()}),$(document).click(function(){$(".modal").each(function(){$(this).fadeOut(200,"swing")}),$("#modal-layer").is(":hidden")||$("#modal-layer").fadeOut(100,"swing")}),$(".modal-footer").click(function(){$(".modal").each(function(){$(this).fadeOut(200,"swing")}),$("#modal-layer").is(":hidden")||$("#modal-layer").fadeOut(100,"swing")})}function smooth_scroll(){$("#nav-list li, #go-up-home, #go-down-about").click(function(a){var b=$(this).attr("id").split("-")[2];$root.animate({scrollTop:$("#"+b).offset().top},650),a.preventDefault()})}function navbar_effect_on_scroll(){$(window).scroll(function(){var a=$(document).scrollTop(),b=$("#banner").offset().top,c=$("#home").offset().top,d=$("#about").offset().top,e=$("#education").offset().top,f=$("#projects").offset().top,g=$("#skills").offset().top;a>=b?$("#nav-bar").removeClass("navbar-invisible").addClass("navbar-visible"):$("#nav-bar").removeClass("navbar-visible").addClass("navbar-invisible"),a>=d?($("#nav-bar").removeClass("navbar-normal").addClass("navbar-small"),$("#go-up-home").fadeIn(500,"swing")):($("#nav-bar").removeClass("navbar-small").addClass("navbar-normal"),$("#go-up-home").fadeOut(500,"swing")),a>=c-1&&d-1>a?$("#scroll-to-home").addClass("navbar-position-indicator"):$("#scroll-to-home").removeClass("navbar-position-indicator"),a>=d-1&&e-1>a?$("#scroll-to-about").addClass("navbar-position-indicator"):$("#scroll-to-about").removeClass("navbar-position-indicator"),a>=e-1&&f-1>a?$("#scroll-to-education").addClass("navbar-position-indicator"):$("#scroll-to-education").removeClass("navbar-position-indicator"),a>=f-1&&g-1>a?$("#scroll-to-projects").addClass("navbar-position-indicator"):$("#scroll-to-projects").removeClass("navbar-position-indicator"),a>=g-1?$("#scroll-to-skills").addClass("navbar-position-indicator"):$("#scroll-to-skills").removeClass("navbar-position-indicator")})}var videoAsRatio=1280/720,$root=$("html body");$(document).ready(function(){var a=$(window).width(),b=$(window).height();$("#home").css({height:b,width:a});var c=($("#background-video").height(),$("#background-video").width(),$("#home").width()),d=$("#home").height(),e=c/d;videoAsRatio>e?$("#background-video").css({height:d}):$("#background-video").css({width:c}),$("section").css({"min-height":.9*$(window).height()}),$("#footer-home").css({"min-height":.15*$(window).height()}),animate_carousel(),animate_modal(),smooth_scroll(),navbar_effect_on_scroll()}),$(window).load(function(){$("#cover-whole-page").hide()}),$(window).resize(function(){$("#home").width(),$("#home").height();$("#home").css({width:$(window).width(),height:$(window).height()});$("#background-video").height(),$("#background-video").width(),$("#home").width(),$("#home").height()});