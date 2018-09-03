function start(){
  var timer = 450; //animation delay

  $("#square").hide( "slide", {direction:"right"}, timer);
  $("#splashText").fadeOut(timer);

  introSeq();
}

function introSeq(){
  var timer = 450; //animation delay
  var count = 0;
  var sequence = window.setInterval(
    function(){
      if ( count == 0) {$("#content").show( "clip" ,  timer);}
      else if ( count == 1 ) {$("#profilePic").show( "fade" ,  timer);}
      else if ( count == 2 ) {$("#introduction").show( "slide", {direction:"left"} ,  timer);}
      else if ( count == 3 ) {$(".tab").delay(0).show( "fade" , timer);}
      else if ( count == 4 ) {clearInterval(sequence);}
      count++;
    },
    timer
  );
}

function swapBlock(block){
  var cont = $(block);
  var back = $("#backBtn");
  var slidesOut = $(".active");

  slidesOut.hide("slide", {direction:"up"}, 400);
  slidesOut.removeClass("active");
  cont.addClass("active");

  window.setTimeout(
    function(){
      cont.show("slide", {direction:"down"}, 300);
      back.show("fade", 300);
    }, 600);
}

function back(){
  var back = $("#backBtn");
  var active = $(".active");
  var intro = $("#introBlock");

  active.hide("slide", {direction:"down"}, 300);
  back.hide("fade", 300);
  intro.show("slide", {direction:"up"}, 600);
  active.removeClass("active");
  intro.addClass("active");
}
