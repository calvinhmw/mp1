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


$(document).ready(function(){
    var newwidth = $(window).width();
    var newheight = $(window).height();
    $("#home").css({"height": newheight, "width": newwidth });
    var newheight = $("#background-video").height();
    $("#home").css({"height": newheight });
});


$(window).resize(function(){
    var newwidth = $(window).width();
    $("#home").css({"width": newwidth });
    var newheight = $("#background-video").height();
    $("#home").css({"height": newheight });
});