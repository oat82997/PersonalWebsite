$(document).ready(function(){
  $(".menu1a").click(function(){
      $(".menu1b").show();
      $(".menu2b").hide();
      $(".menu3b").hide();
      $(".menu4b").hide();
      $(".thanks").hide();
  });
  $(".menu2a").click(function(){
      $(".menu2b").show();
      $(".menu1b").hide();
      $(".menu3b").hide();
      $(".menu4b").hide();
      $(".thanks").hide();
  });
  $(".menu3a").click(function(){
      $(".menu3b").show();
      $(".menu2b").hide();
      $(".menu1b").hide();
      $(".menu4b").hide();
      $(".thanks").hide();
  });
  $(".menu4a").click(function(){
      $(".menu4b").show();
      $(".menu2b").hide();
      $(".menu3b").hide();
      $(".menu1b").hide();
      $(".thanks").hide();
  });

  var n = Math.ceil(6 * Math.random());
  $("body").removeClass().addClass("colors-" + n);

});

var n = 0;

function changeColor() {
  if(n >= 6){n = 1;}else{n = n + 1;}
  $("body").removeClass().addClass("colors-" + n);
};