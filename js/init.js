(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    });
    //carouselle 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
    });
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  })(jQuery); // end of jQuery name space
  