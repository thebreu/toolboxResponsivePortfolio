$(function(){$.scrollify({section:".section"})}),$(".cta").on("click",function(){$(this).next().css("display","block")}),$(".left-arrow").on("click",function(){$("#port-view").css("transform","translateX(-100vw)"),count--}),$(".right-arrow").on("click",function(){$("#port-view").css("transform","translateX(-100vw)"),count++});