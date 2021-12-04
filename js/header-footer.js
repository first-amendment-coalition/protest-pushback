$(document).ready(function(){

  // // Toggle menu dropdown
  // $('.arrow, .chapters-btn').click(function(e){
  //   e.stopPropagation();
  //   $('#menu-dropdown').slideToggle('slow');
  // });
  //
  // // Fix jump on section menu click
  // $(".menu-item").click(function(e) {
  //    e.stopPropagation();
  //    $('#menu-dropdown').slideUp('slow');
  //    const section = $(this).attr("data-section");
  //   //  const title = $(this).text();
  //    $('html,body').animate({scrollTop: $("#"+section).offset().top-100},'slow');
  // });
  //
  // $(document).click(function(e){
  //   if (e.target.id !== 'menu-dropdown') {
  //     $('#menu-dropdown').slideUp('slow');
  //   }
  // });


  // // Show story nav after 300px scroll
  // $(window).scroll(function(){
  //   if ($(window).scrollTop() > 300){
  //     $('#laist-nav').slideUp('slow');
  //   } else {
  //     $('#laist-nav').slideDown('slow');
  //   }
  //
  //   var scrollTopOffset = 200;
  //
  //   // Display section names on scroll
  //     if($(window).scrollTop()+scrollTopOffset > $('#section-1').offset().top
  //         && $(window).scrollTop()+scrollTopOffset < $('#section-2').offset().top){
  //         $(".story-title").text("Chapter 1");
  //     } else if($(window).scrollTop()+scrollTopOffset > $('#section-2').offset().top
  //         && $(window).scrollTop()+scrollTopOffset < $('#section-3').offset().top){
  //         $(".story-title").text("Chapter 2");
  //   } else if($(window).scrollTop()+scrollTopOffset > $('#section-3').offset().top){
  //         $(".story-title").text("Chapter 3");
  //     }
  // });

  // progress bar
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("indicator-bar").style.width = scrolled + "%";
  }


  // inject year into footer
  var today = new Date();
  var year = today.getFullYear();
   $('.copyright-text span').text(year);


});
