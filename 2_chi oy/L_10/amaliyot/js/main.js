$(document).ready(function(){
    $("input[type=checkbox]").on('click', function(){
      $(this).parent().toggleClass("black");
    })
  })