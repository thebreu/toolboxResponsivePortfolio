/* $ = 22 */

$(function() {
  $.scrollify({
    section : ".section"
  });
});
let close = false;
$('.cta').on('click', function(){
  if(close === true){
    $(this).next().css('display', 'none');
    $('.x1').css('transform', 'rotate(0deg)');
    $('.x2').css('transform', 'rotate(90deg)');
    close = false;
  }else{
    $(this).next().css("display" , "block");
    $('.x1').css('transform', 'rotate(45deg)');
    $('.x2').css('transform', 'rotate(-45deg)');
    close = true;
  }

});
let moveNum = 0;
$('.left-arrow').on('click', function(){
  moveNum += 100;
  $('#port-view').css('transform', "translateX("+moveNum+"vw)");
  $('.right-arrow').css('display', "block");
  if(moveNum === 0){
    $('.left-arrow').css('display', 'none');
  }
});

$('.right-arrow').on('click', function(){
  $('.left-arrow').css('display', 'block');
  moveNum -= 100;
  $('#port-view').css('transform', "translateX("+moveNum+"vw)");
  $('left-arrow').css("display", "show");
  if(moveNum === -300){
    $('.right-arrow').css('display', 'none');
  }
});
