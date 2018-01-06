var config = {
  max: 47 // max count + 1 // image number : 0~ 100 -> 101 (the number : 101)
}

function Changeimage()
{
  var randCount = Math.round(Math.random() * config.max) % config.max;
  return "img/nagato (" + randCount + ").jpg";
}

function asakura()
{
  $("#nyImg").attr("src","img/asakura.jpg");
}


$(function(){

  $("#nyImg").attr("src",Changeimage());
  $('#nyImg').on('click',function(){ 
    $(this).attr('src', Changeimage());
    $(this).after(node);
  });
  
});