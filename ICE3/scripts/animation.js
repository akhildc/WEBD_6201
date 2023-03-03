function fadeInOutTo()
{
    //fade out - display none
    $('.red-box').fadeOut(3000);

    //fade in- display to 
    $('.red-box').fadeIn(1500);

    //fade to
    $('.green-box').fadeTo(2000, .3);

    // fade to half opacity
    $('.blue-box').fadeTo(1000, .5);

    // toggle the display (went to none)
    $('.blue-box').fadeToggle();

    // toggle display(went to block, but remebered the fadeTo)
    $('.blue-box').fadeToggle();
}

function hideElement()
{
    $('.red-box').hide(1000);
    $('.red-box').show(3000);
    $('.red-box').slideUp(3000);
    $('.red-box').slideDown(3000);
    $('.red-box').slideToggle(3000);
    $('.red-box').slideToggle(3000);
}

function chainAnimations()
{
    $('.red-box').fadeTo(1000, .5);
    $('.green-box').delay(1000).fadeTo(1000, .5);

}

chainAnimations();
//hideElement();
//fadeInOutTo();