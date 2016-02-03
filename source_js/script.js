//var divs = document.getElementsByTagName('div');
//for(var i=0; i<divs.length; i++) {
//  divs[i].addEventListener("click", highlightThis);
//  /*
//  divs[i].addEventListener("click", highlightThis, true);
//  divs[i].addEventListener("click", highlightThis, false);*/
//}
//
//function highlightThis(event) {
//    //event.stopPropagation();
//
//    var backgroundColor = this.style.backgroundColor;
//    this.style.backgroundColor='yellow';
//    alert(this.className);
//    this.style.backgroundColor=backgroundColor;
//}
//



//
//$(document).ready(function(){
//    var newwidth = $(window).width();
//    var newheight = $(window).height();
//    $("#home").css({"height": newheight, "width": newwidth });
//
//    //console.log("video width is "+ videowidth);
//    //console.log("home width is "+ homewidth);
//    //$("#home").css({"height": videowidth });
//
//    //if(videoheight+300<$("#home").height()) {
//    //    $("#home").css({"height": videoheight });
//    //}
//});
//
//
//$(window).resize(function(){
//    var newwidth = $(window).width();
//    $("#home").css({"width": newwidth });
//    var newheight = $("#background-video").height();
//    $("#home").css({"height": newheight });
//
//    var videoheight = $("#background-video").height();
//    var videowidth = $("#background-video").width();
//    var homewidth = $("#home").width();
//    var homeheight = $("#home").height();
//
//
//    //console.log("video width is "+ videowidth);
//    //console.log("home width is "+ homewidth);
//
//    //console.log("video aspact ratio is "+ videowidth/videoheight);
//
//
//});


var videoAsRatio = 1280/720;


$(document).ready(function(){

    var newwidth = $(window).width();
    var newheight = $(window).height();
    $("#home").css({"height": newheight, "width": newwidth });

    var videoheight = $("#background-video").height();
    var videowidth = $("#background-video").width();
    var homewidth = $("#home").width();
    var homeheight = $("#home").height();

    var homeAsRatio = homewidth/homeheight;

    if(videoAsRatio>homeAsRatio) {
        $("#background-video").css({"height": homeheight});
    }else{
        $("#background-video").css({"width": homewidth});
    }
});


// need to find a new way to resize window

$(window).resize(function(){
    var oldHomewidth = $("#home").width();
    var oldHomeheight = $("#home").height();
    var oldHomeAsRatio = oldHomewidth/oldHomeheight;

    $("#home").css({"width": $(window).width(), "height": $(window).height()});

    var videoheight = $("#background-video").height();
    var videowidth = $("#background-video").width();

    var homewidth = $("#home").width();
    var homeheight = $("#home").height();
    var homeAsRatio = homewidth/homeheight;

    //if(homeAsRatio>=videoAsRatio) {
    //    $("#background-video").css({"width": homewidth});
    //}else if(homeAsRatio<videoAsRatio){
    //    $("#background-video").css({"height": homeheight});
    //}

});





//
//$(document).ready(function(){
//    var newwidth = $(window).width();
//    var newheight = $(window).height();
//    $("#home").css({"height": newheight, "width": newwidth });
//
//    //console.log("video width is "+ videowidth);
//    //console.log("home width is "+ homewidth);
//    //$("#home").css({"height": videowidth });
//
//    //if(videoheight+300<$("#home").height()) {
//    //    $("#home").css({"height": videoheight });
//    //}
//});
//
//
//$(window).resize(function(){
//    var newwidth = $(window).width();
//    $("#home").css({"width": newwidth });
//    var newheight = $("#background-video").height();
//    $("#home").css({"height": newheight });
//
//    var videoheight = $("#background-video").height();
//    var videowidth = $("#background-video").width();
//    var homewidth = $("#home").width();
//    var homeheight = $("#home").height();
//
//
//    //console.log("video width is "+ videowidth);
//    //console.log("home width is "+ homewidth);
//
//    //console.log("video aspact ratio is "+ videowidth/videoheight);
//});
