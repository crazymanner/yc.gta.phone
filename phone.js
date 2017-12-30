$(document).ready(function() {      
    $('.dc-menu-trigger').click(function(){
       $('nav').toggleClass( "dc-menu-open" );
       $('.menu-overlay').toggleClass( "open" );
       $('header').toggleClass( "shownav" );
    }); 
 });

 $('.toggle').on('click', function(event) {
    if (!$(this).hasClass("open")) {
      $(this).siblings(".content").slideDown();
      $(this).addClass("open");   
    }else{
       $(this).siblings(".content").slideUp();
       $(this).removeClass("open"); 
       $(this).blur();
    }
  });
  
  $(".bottom .toggle").click(function(){
  
    if($('.bottom .content').is(":visible")){
        $("html, body").animate({scrollTop:$(this).offset().top-10});
    }
    
  });
