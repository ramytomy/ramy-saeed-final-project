

$(document).ready(function(){
    $('.button').click(function(){
        $('#text').css("color","blue");
        $('.content-hero h1 span').css("color","blue");

        $('.red').click(function(){
            $('#text').css("color","red");
            $('.content-hero h1 span').css("color","red");

        })
        
    })
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
   
  } else {
    document.getElementById("navbar").style.top = "-100px";
   
  }
}

var swiper = new Swiper(".history-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
$('.portfolio .button-container .btn').click(function(){

  let filter = $(this).attr('data-filter');

  if(filter == 'all'){
    $('.portfolio .image-container .box').show('400')
  }else{
    $('.portfolio .image-container .box').not('.'+filter).hide('200');
    $('.portfolio .image-container .box').filter('.'+filter).show('400');
  }

});







const scrollBtn = document.querySelector('.scroll-btn') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})





















$( document ).ready(function() {
  var imageSources = ['https://www.greentidekw.com/wp-content/uploads/2019/06/%D8%B7%D8%A7%D9%87%D8%B1-%D8%A3%D8%A8%D9%88-%D8%B2%D9%8A%D8%AF.jpg','https://www.shorouknews.com/uploadedimages/Sections/Sports/original/173317_0%20(1).jpg','https://img.soutalomma.com/Large/201708060433373337.jpg','https://media.filgoal.com/news/large/146387_0.PNG','img/ga5.jpg','https://img.youm7.com/large/20180902020740740.jpg','https://i.ytimg.com/vi/8ls5UgjeGEE/hqdefault.jpg','https://m.masralarabia.net/images/ns/20775469341429761329-ouu_oo10-e1406269808552.jpg','https://r2.community.samsung.com/t5/image/serverpage/image-id/1514523i65B86ACBD96BA849/image-size/large?v=v2&px=999','https://www.alayyam.info/Uploads/Content/0707/30SLXXC0-FX9BXY/AHLEY.jpg','https://arabic.sport360.com/wp-content/uploads/2021/05/0.jpg','https://www.misrday.com/temp/resized/medium_2021-09-27-8cda1d5357.jpg','https://gate.ahram.org.eg/daily/Media/News/2021/1/28/2021-637474641701470695-147.jpg','https://elhadaf24.com/wp-content/uploads/2021/04/384c09e3b8de7941c49dc884718f9d0a.jpg','https://img.youm7.com/large/201804240140134013.jpg','http://media.filgoal.com/news/verylarge/168344278.jpg','https://gate.ahram.org.eg/Media/News/2019/2/14/19_2019-636857541971058044-105.jpg','https://media.gemini.media/img/yallakora/Normal//2020/5/15/befunky-collage-12-2020_5_15_16_9.jpg','https://i.pinimg.com/originals/35/35/19/353519799d43823cf98db75203b420a9.jpg','https://www.masralyoum.net/content/uploads/2020/05/10/96ed9d83e8.jpg',];
    var imageSrc; // Used for left and right arrow in full screen image viewer
    var currentPage = 1;
    var numOfPages = Math.ceil(imageSources.length/4);
    //populate page numbers
    for(var j = 1; j<=numOfPages;j++){
      $('#pages').append("<a class='galleryButton' value='" + j +"'>" + j + "</a>");
    }
    //populate first row of images
    $('.galleryButton').first().addClass('selectedPage');
    var thePage = $('.galleryButton').first(); //Used for showing selected page when clicking next
    
      for(var i = 0; i<4;i++){
        var html = '<img src="' + imageSources[i] + '" class="galleryImage" alt="nothing">';
        $('#gallery').append(html);
      }
    
    //click functions
    $('.galleryButton').on("click",galleryButtonClick);
    $('#next').on( "click", nextClick);
    $('#prev').on( "click", prevClick);
    $('.galleryImage').on( "click", galleryImageClick);
    $('.closebtn').on( "click", closeOverlay);
  
    
    function runAnimation(direction,isNext,passedPage){
      $(".galleryButton,#next,#prev").off('click');
      $('#gallery').addClass(direction);
      if(isNext == 'next'){
        setTimeout(function(){
         pageHandler(currentPage,1);
        },1000);
      }else if(isNext == 'prev'){
        setTimeout(function(){
         pageHandler(currentPage,-1);
        },1000);
      }else if(isNext == false) {
        setTimeout(function(){
          pageHandler(passedPage,0);
         },1000);
      }
      setTimeout(function(){
          $('#gallery').removeClass(direction);
        $('.galleryButton').on("click",galleryButtonClick);
        $('#next').on("click",nextClick);
        $('#prev').on("click",prevClick);
         },2000);
    }
    
    function pageHandler(passedPage, pageAddition){
     
      var page = passedPage + pageAddition;
      currentPage = page;
      if(currentPage == 1){
        $('#prev').css('display','none');
      }else{
        $('#prev').css('display','initial');
      }
      if(currentPage == numOfPages){
        $('#next').css('display','none');
      }else{
        $('#next').css('display','initial');
      }
      var startingNumber =  getStartingNumber(page);
      $('#gallery').html("");
       for(var i = startingNumber; i<startingNumber+4;i++){
         var html = '<img src="' + imageSources[i] + '" class="galleryImage">';
         $("#gallery").append(html);
       }
      //Dont show broken link image.
      $(".galleryImage").on("error", function() {
          $(this).hide();
      });
       $('.galleryImage').on( "click", galleryImageClick);
  }
  function getStartingNumber(page){
    /*1 = 0 2 = 4 3 = 8 4 = 12 5 = 16*/
    var startingNumber = 0;
    if(page != 1){
     for(var i = 1; i< page;i++){
       startingNumber = startingNumber + 4;
     }
    }
    return startingNumber;
  }
    
    //galleryButton handler
    function galleryButtonClick(event){
      $('.galleryButton').removeClass('selectedPage');
      $(event.currentTarget).addClass('selectedPage');
      thePage = event.currentTarget;
      var passedPage = parseInt($(event.currentTarget).attr('value'));
      if(passedPage > currentPage){
        runAnimation('right2left',false,passedPage);
      }else if(passedPage < currentPage){
        runAnimation('left2right',false,passedPage);
      }
    }
    
    //next button handler
    function nextClick(){
      if(currentPage != numOfPages){
        $('.galleryButton').removeClass('selectedPage');
        $(thePage).next().addClass('selectedPage');
        thePage = $(thePage).next();
        runAnimation('right2left','next',currentPage);
      }
    }
    
    //prev button handler
    function prevClick(){
      if(currentPage != 1){
        $('.galleryButton').removeClass('selectedPage');
        $(thePage).prev().addClass('selectedPage');
        thePage = $(thePage).prev();
        runAnimation('left2right','prev',currentPage);
      }
    }
    
    function galleryImageClick(){
      $('.overlay-content').html('');
      $('.overlay').css('height','100%');
      var image = '<img src="' + this.src + '" class="overlayImage">';
      imageSrc = this.src;
      $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
      $('#arrowLeft').on( "click", leftArrow);
      $('.overlay-content').append(image);
      $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
      $('#arrowRight').on( "click", rightArrow);
    }
  
    function closeOverlay(){
      $('.overlay').css('height','0');
      $('.overlay-content').html('');
    }
    
    function leftArrow(){
      var currentPosition = imageSources.indexOf(imageSrc);
      if(currentPosition != 0){
        var image = '<img src="' + imageSources[currentPosition-1] + '" class="overlayImage">';
        $(".overlay-content").html('');
        $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
        $('.overlay-content').append(image);
        $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
        imageSrc = imageSources[currentPosition-1];
        $('#arrowLeft').on( "click", leftArrow);
        $('#arrowRight').on( "click", rightArrow);
      }
    }
    
    function rightArrow(image){
      var currentPosition = imageSources.indexOf(imageSrc);
      if(currentPosition != imageSources.length-1){
        var image = '<img src="' + imageSources[currentPosition+1] + '" class="overlayImage">';
        $(".overlay-content").html('');
        $('.overlay-content').append('<i class="fas fa-angle-left" id="arrowLeft"></i>');
        $('.overlay-content').append(image);
        $('.overlay-content').append('<i class="fas fa-angle-right" id="arrowRight"></i>');
        imageSrc = imageSources[currentPosition+1];
        $('#arrowLeft').on( "click", leftArrow);
        $('#arrowRight').on( "click", rightArrow);
      }
    }
  });
  
  
  






window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#leftMenu').fadeOut()
  }else{  $('#leftMenu').fadeIn()
  }
  
})



function openBtn(){
  document.getElementById('leftMenu').style.width="300px"
}
function closeBtn(){
  document.getElementById('leftMenu').style.width="0px"
}


$('.testimonial .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  nav: false,
  items: 1
});


/*gallery*/

function getPageList(totalPages, page, maxLength){
  function range(start, end){
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if(totalPages <= maxLength){
    return range(1, totalPages);
  }

  if(page <= maxLength - sideWidth - 1 - rightWidth){
    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
  }

  if(page >= totalPages - sideWidth - 1 - rightWidth){
    return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
  }

  return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
  var numberOfItems = $(".card-content .card").length;
  var limitPerPage = 3; //How many card items visible per a page
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 7; //How many page elements visible in the pagination
  var currentPage;

  function showPage(whichPage){
    if(whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
      .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
      .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);
    return true;
  }

  $(".pagination").append(
    $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
    $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
  );

  $(".card-content").show();
  showPage(1);

  $(document).on("click", ".pagination li.current-page:not(.active)", function(){
    return showPage(+$(this).text());
  });

  $(".next-page").on("click", function(){
    return showPage(currentPage + 1);
  });

  $(".previous-page").on("click", function(){
    return showPage(currentPage - 1);
  });
});



/*site ---- country  */
const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function(){
 if(pass_field.type === "password"){
   pass_field.type = "text";
   showBtn.textContent = "HIDE";
   showBtn.style.color = "#3498db";
 }else{
   pass_field.type = "password";
   showBtn.textContent = "SHOW";
   showBtn.style.color = "#222";
 }
});

/*cursor*/
var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });





    $('.first li').click(function(){
      $(this).toggleClass("shadow-1").siblings();
      $(this).toggleClass("fill-color").siblings();
    });
   
   









