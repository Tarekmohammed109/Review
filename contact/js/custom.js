
$(function () {
    
    'use strict';
    
    var userErrors  = true,
        emailErrors = true,
        msgErrors   = true;
    
    $('.username').blur(function () {
        
        if ($(this).val().length < 4) {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
            $(this).parent().find('.asterisx').fadeIn(100);
            
            userErrors  = true;
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
            $(this).parent().find('.asterisx').fadeOut(100);
            
            userErrors  = false;
            
        }

    });
    
    $('.email').blur(function () {
        
        if ($(this).val() === '') {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
            $(this).parent().find('.asterisx').fadeIn(100);
            
            emailErrors = true;
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
            $(this).parent().find('.asterisx').fadeOut(100);
            
            emailErrors = false;
            
        }
        
    });
    
    $('.message').blur(function () {
        
        if ($(this).val().length < 11) {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
            $(this).parent().find('.asterisx').fadeIn(100);
            
            msgErrors = true;
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
            $(this).parent().find('.asterisx').fadeOut(100);
            
            msgErrors = false;
            
        }
        
    });
    
    $('.contact-form').submit(function(e) {
        
        if(userErrors  === true || emailErrors === true || msgErrors === true) {
            
            e.preventDefault();
            
            $('.username, .email, .message').blur();
            
        }
        
        
        
    });
    
});





