$(function(){

  $('.header__burger').on('click', function(){
    $('.menu__list').toggleClass('active');
  });
  
	  $( ".header__loc-info a" ).hover(function(){
	    $('.header__map').addClass('active');
    });

	  $('.header__map , .header__loc-info').mouseleave(function(){
      $('.header__map').removeClass('active');
    });
    
  let bg = document.querySelector('.parallax-one');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
      bg.style.transform = 'translate(+' + x * 75 + 'px, +' + y * 75 + 'px)';
  });

  let bgg = document.querySelector('.parallax-two');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
      bgg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  });

  $('select').styler();

});


