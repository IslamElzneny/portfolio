$(document).ready(function(){

    /* Start menu Bar Section */

    const navMenu=document.getElementById("nav-menu"),
    toggleMenu=document.getElementById('toggle-menu'),
    closeMenu=document.getElementById('close-menu');


    toggleMenu.addEventListener('click',()=>
    {
        navMenu.classList.toggle('show');
    }) 

    closeMenu.addEventListener('click',()=>
    {
        navMenu.classList.remove('show');
    })

    /* End menu Bar Section */

    /* Start Navigation */

    $(".navigation").click(function(){
       $('html, body').animate({
        scrollTop:0
    }
    ,'slow');
    });

    
   $(window).on("scroll",function(){
       var scr=$(window).scrollTop();
      
       if(scr<700){
           $(".navigation").css("display","none");
           $(".version_site").css("display","block")
       }else{
           $(".navigation").css("display","flex");
           $(".version_site").css("display","none")
       }

   });

    /* End Navigation */

   /* Start qualification Section */

   $("#education").click(function(){
       $("#content2").css("display","none");
       $("#content1").css("display","block");
       $(this).css("color","#fa8971");
       $("#work").css("color","rgb(0 0 0)");
   });

   $("#work").click(function(){
       $("#content1").css("display","none");
       $("#content2").css("display","block"); 
       $(this).css("color","#fa8971");
       $("#education").css("color","rgb(0 0 0)");
   });

   /* End qualification Section */


   /* Start Scrolling Sections */

    const qualification=document.getElementsByClassName('qualification')[0],
          headers_data  =document.getElementsByClassName('header_data'),
          sections_right  =document.getElementsByClassName('section_right'),
          current_position=document.querySelector('.container_section_myCurrentLocation'),
          images=document.querySelectorAll(".content_project img");
    
    window.onscroll=function(){
        //offset Top 
        let qualificationOffsetTop=qualification.offsetTop;

        //offset Top 
        let imagesOffsetTop=images[0].offsetTop;

        // offset top current position
        let current_position_offsetTop=current_position.offsetTop;

        // qualification  outer height
        let qualificationOuterHeight=qualification.offsetHeight;

        // image outer height
        let imagesOuterHeight=images[0].offsetHeight;

        //  current position outer height
        let current_position_outerHeight=current_position.offsetHeight;


        // window height
        let windowHeight=this.innerHeight;

        // window scroll top
        let windowScrollTop=this.pageYOffset;
        
        if(windowScrollTop > ( qualificationOffsetTop + qualificationOuterHeight - (windowHeight+windowHeight-350) )  ){
            for(let i=0;i<headers_data.length;i++)
            {
                headers_data[i].classList.add('animate_skills');
            }
            for(let i=0;i<sections_right.length;i++){
                sections_right[i].classList.add('animate_skills');
            }
        }if (windowScrollTop > ( imagesOffsetTop + imagesOuterHeight - (windowHeight+windowHeight-350) )) {
            for(let i=0;i<images.length;i++){
                images[i].classList.add('animate__image');
            }
        }if (windowScrollTop > ( current_position_offsetTop + current_position_outerHeight - (windowHeight+130)  )) {
            document.querySelector('.footer_current_position').classList.add('showFooterCurrentPosition');
        }
        
    }
  
    /* End Scrolling Sections */

    /* Start Skills Section */

    $(".reviews__menu").on('click', 'li', function(e) {
        $(this).parent().find('li.active__review').removeClass('active__review');
        $(this).addClass('active__review');

        // show description by dataset(id)

        let className_des =this.getAttribute('data-id');
        let des_show      =document.querySelector('.discription_testeminial'+'.'+className_des);

        $('.discription_testeminial'+'.'+className_des).parent().find('div.'+'active__des').removeClass('active__des');
        $('.discription_testeminial'+'.'+className_des).addClass('active__des');

    });

    /* End Skills Section */

    /* Start Digital Store Section */

    $('.container__slider.show__slide').fadeIn(200);

    $('#prevBtn').on('click',function(){

        let currentSlide=$(this).parent().parent().children('.show__slide').fadeOut(200);
        let idSlide =currentSlide.attr('id');

        currentSlide.removeClass('show__slide');    
        if(idSlide=='1'){
            document.getElementById('3').classList.add('show__slide');
            $(".shop__slider #3").delay(200).fadeIn(200);
        }else{
            document.getElementById(''+(parseInt(idSlide)-1)+'').classList.add('show__slide');
            $(".shop__slider #"+(parseInt(idSlide)-1)).delay(200).fadeIn(200);
        }

    })

    $('#nextBtn').on('click',function(){

        let currentSlide=$(this).parent().parent().children('.show__slide').fadeOut(200);
        let idSlide =currentSlide.attr('id');
      

        currentSlide.removeClass('show__slide');    

        if(idSlide=='3'){
            document.getElementById('1').classList.add('show__slide');

            $(".shop__slider #1").delay(200).fadeIn(200);

        }else{
            document.getElementById(''+(parseInt(idSlide)+1)+'').classList.add('show__slide');

            $(".shop__slider #"+(parseInt(idSlide)+1)).delay(200).fadeIn(200);
        }
    })

    /* End Digital Store Section */

    /* Start quetion Section */

    // handle show and hide content quetion 

    // get content quetion element

    $(".quetion__section").on('click','.quetion__head',function(){

        $(this).parent().children('.quetion__content').slideToggle(800);
        
        if($(this).find('.plus_section').attr('class').split(' ')[1] == 'hide'){

            $(this).find('.plus_line_v').toggleClass('vertical_to_horizental');

            $(this).parent().toggleClass("active");

            var plus_section=$(this).find('.plus_section');

            plus_section[0].classList.remove('hide');

        }else{

            $(this).find('.plus_line_v').toggleClass('vertical_to_horizental');

            $(this).parent().delay(2000).toggleClass("active");

            var plus_section=$(this).find('.plus_section');

            plus_section[0].classList.add('hide');
        }
        
    })
    
    /* End quetion Section */

    /* Start post Section */

    // animation on image post and info post

    $('.post_content').hover(
        function(){
            $(this).css("cursor","pointer");

            $(this).find("img").css("transform","scale(1.05)");

            $(this).find(".info__post").css(
            {
                "bottom":"-90px",
                "box-shadow":"10px 10px 10px #00000029"
            });

            $(this).find(".inner_border_box").css("borderWidth","1px")
        },
        function(){
            $(this).css("cursor","none");

            $(this).find("img").css("transform","scale(1)");

            $(this).find(".info__post").css(
            {
                "bottom":"-105px",
                "box-shadow":"0px 0px 0px #00000029"
            });
            
            $(this).find(".inner_border_box").css("borderWidth","1px 1px 0px 1px")
        }
    )

    /* End post Section */

});



    






