var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  // for (i = 0; i < dots.length; i++) {
      // dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block"; 
  // dots[slideIndex-1].className += " active";
}

// more/less
var content = $('.more-content');
var more = $('.more');
var less = $('.less');
$('.more').on('click',function(){
  $(this).css('display',"none");
  $(this).siblings('.more-content').css('visibility',"visible");
   $(this).siblings('.less').css('visibility',"visible");
  // console.log($(this));
})
$('.less').on('click',function(){
  $(this).css('visibility',"hidden");
  $(this).siblings('.more-content').css('visibility',"hidden");
   $(this).siblings('.more').css('display',"initial");
  // console.log($(this));
})

// show all posts
var extra = $('.show-allposts');
// console.log(extra);
var icon = $('#post-all span');
icon.on('click',function(){

  if ($('#post-all span').text() === 'SHOW ALL POSTS' ){
    $('.show-allposts').css('display','flex');
    $('#post-all span').text("SHOW LESS POSTS");
    
  }else if(icon.text() === 'SHOW LESS POSTS' ){
    extra.css('display','none');
    icon.text("SHOW ALL POSTS");
     
  }
})
// browse all
var extra1 = $('.browse-all-posts');
// console.log(extra);
var icon1 = $('#browse-all span');
icon1.on('click',function(){

  if ($('#browse-all span').text() === 'BROWSE ALL' ){
    $('.browse-all-posts').css('display','block');
    $('#browse-all span').text("BROWSE LESS");
    
  }else if(icon1.text() === 'BROWSE LESS' ){
    extra1.css('display','none');
    icon1.text("BROWSE ALL");
     
  }
})