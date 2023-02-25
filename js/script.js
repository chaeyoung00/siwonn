// $(function(){
//     $(window).resize(function(){
//         const width = $(window).width();
//         if (width>=1200){
          
//                 $('.gnb> ul> li').on('mouseover', function(){
//                     $('.gnb> ul> li> .sub').css('display','block');
//                     $('header> .sub_bg').css('display', 'block')
//                 });
            
//                 $('.gnb> ul> li').on('mouseout', function(){
//                     $('.gnb> ul> li> .sub').css('display','none');
//                     $('header> .sub_bg').css('display','none');
            
//                 });
                
            
          
//         }else if (width<833){
            
//                 $('#toggle').on('click',function(){
//                     $(this).toggleClass('on');
//                     $('.gnb').toggleClass('on');
//                 });
//                 // $('.gnb>.gnb1>ul>li').on('mouseenter',function(){
//                 //         $('.gnb>.gnb1>ul>li').removeClass('active');
//                 //         $(this).addClass('active');
//                 //         $('.sub').stop().fadeOut(250);  	
//                 //         $(this).children('.sub').stop().fadeIn(250);
//                 // });
            
            
//                 $('.gnb>ul>li>a').on('click',function(event){
//                     event.preventDefault();
//                     if($(this).next().css('display')=='none'){
//                       $('.gnb>ul>li>a').removeClass('active');
//                       $(this).addClass('active');
//                       $('.sub:visible').slideUp();
//                       $(this).next().slideDown();
//                     }else{
//                       $(this).removeClass('active');
//                       $(this).next().slideUp();
//                     }
//                    });
            
//         }
//     });

//     $(window).trigger("resize");
// });




// $(function(){
//     $(window).resize(function(){
//         const width = $(window).width();
//         if (width>=1200){
//             $(function(){
//                 $('.gnb> ul> li').on('mouseover', function(){
//                     $('.gnb> ul> li> .sub').css('display','block');
//                     $('header> .sub_bg').css('display', 'block')
//                 });
            
//                 $('.gnb> ul> li').on('mouseout', function(){
//                     $('.gnb> ul> li> .sub').css('display','none');
//                     $('header> .sub_bg').css('display','none');
            
//                 });
                
            
//             });
//         }else if (width<833){
//             $(function(){
//                 $('#toggle').on('click',function(){
//                     $(this).toggleClass('on');
//                     $('.gnb').toggleClass('on');
//                 });
//                 // $('.gnb>.gnb1>ul>li').on('mouseenter',function(){
//                 //         $('.gnb>.gnb1>ul>li').removeClass('active');
//                 //         $(this).addClass('active');
//                 //         $('.sub').stop().fadeOut(250);  	
//                 //         $(this).children('.sub').stop().fadeIn(250);
//                 // });
            
            
//                 $('.gnb>ul>li>a').on('click',function(event){
//                     event.preventDefault();
//                     if($(this).next().css('display')=='none'){
//                       $('.gnb>ul>li>a').removeClass('active');
//                       $(this).addClass('active');
//                       $('.sub:visible').slideUp();
//                       $(this).next().slideDown();
//                     }else{
//                       $(this).removeClass('active');
//                       $(this).next().slideUp();
//                     }
//                    });
//             });
//         }
//     });

//     $(window).trigger("resize");
// });



/*데스크탑 사이즈 메뉴*/
$(function(){
    $('.gnb> ul> li').on('mouseover', function(){
        $('.gnb> ul> li> .sub').css('display','block');
        $('header> .sub_bg').css('display', 'block')
    });

    $('.gnb> ul> li').on('mouseout', function(){
        $('.gnb> ul> li> .sub').css('display','none');
        $('header> .sub_bg').css('display','none');

    });
    

});




/* 모바일, 테블릿 사이즈 메뉴 */
$(function(){
    $('#toggle').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
    // $('.gnb>.gnb1>ul>li').on('mouseenter',function(){
    //         $('.gnb>.gnb1>ul>li').removeClass('active');
    //         $(this).addClass('active');
    //         $('.sub').stop().fadeOut(250);  	
    //         $(this).children('.sub').stop().fadeIn(250);
    // });


    $('.gnb>ul>li>a').on('click',function(event){
        event.preventDefault();
        if($(this).next().css('display')=='none'){
          $('.gnb>ul>li>a').removeClass('active');
          $(this).addClass('active');
          $('.sub:visible').slideUp();
          $(this).next().slideDown();
        }else{
          $(this).removeClass('active');
          $(this).next().slideUp();
        }
       });
});












