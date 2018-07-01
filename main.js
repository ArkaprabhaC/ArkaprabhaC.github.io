 //Improved Script for preloader
        
$(window).on('load', function(){
    $('.preloader-overlay').fadeOut();
});
     


//Script for AJAX dynamic page load and class removal on event trigger( viewport width reduction )

$(document).ready(function(){
    
              if ($(window).width()>600 && $(window).width() < 800) {
                 
                 $('.card').removeClass("ml-auto mr-auto"); 
              }else{
                  $('.card').addClass("ml-auto mr-auto"); 
                  
              }
        
            
            //AJAX scripts
    
            //Default  
           $('.section-text').load('assets/includes/steeringCommittee.html');  
            
            $('.load-1').click(function(){
                 $('.section-text').load('assets/includes/steeringCommittee.html');           
            }); 
            $('.load-2').click(function(){
                 $('.section-text').load('assets/includes/editorialCommittee.html');           
            }); 
            $('.load-3').click(function(){
                 $('.section-text').load('assets/includes/advisoryBoard.html');           
            }); 
            $('.load-4').click(function(){
                 $('.section-text').load('assets/includes/organizingCommittee.html');           
            }); 
            $('.load-5').click(function(){
                 $('.section-text').load('assets/includes/technicalProgramme.html');           
            });  
            
});
    