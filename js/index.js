/**
 * Created by Vladimir Abrahamyan
 */
$(function () {
    $('.menu-block, .menu-item').on('click', function() {
        $('.name-block').addClass('reverse');
        $('.name-block-container').addClass('reverse');
        $('.menu-blocks').addClass('hidex');
        $('.inline-menu-container').removeClass('hidex');
        $('.inline-menu-container').addClass('showx');
    });
    //On Click Open About/Resume Block
    $('.about-block, .menu-item.about').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.content-blocks.about').removeClass('hidex');
        $('.content-blocks.about').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.about').addClass('active');
    });
    //On Click Open Portfolio Block
    $('.portfolio-block, .menu-item.portfolio').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.content-blocks.portfolio').removeClass('hidex');
        $('.content-blocks.portfolio').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.portfolio').addClass('active');
    });
    //On Click Open Blog Block
    $('.blog-block, .menu-item.blog').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.content-blocks.blog').removeClass('hidex');
        $('.content-blocks.blog').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.blog').addClass('active');
    });
    //On Click Open Contact Block
    $('.contact-block, .menu-item.contact').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.content-blocks.contact').removeClass('hidex');
        $('.content-blocks.contact').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.contact').addClass('active');
    });

    //On Click Close Blocks
    $('#close').on('click', function() {
        $('.name-block').removeClass('reverse');
        $('.name-block-container').removeClass('reverse');
        $('.menu-blocks').removeClass('hidex');
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.inline-menu-container').removeClass('showx');
        $('.inline-menu-container').addClass('hidex');
        $('.menu-item').removeClass('active');
    });

    //Function for 'Index-Menu2.html'
    $('#home').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks').addClass('hidex');
        $('.inline-menu-container').removeClass('showx');
        $('.menu-item').removeClass('active');
    });

    //remove advertising
    $('div').filter(function() {
        return $(this).css('z-index') == '9999999';
    }).remove();

    // Typing Animation (Typed.js)
    var typed = new Typed('.element', {
        strings: ["UX, UI Designer", "Web App Developer", "Full Stack Developer"],
        typeSpeed: 0,
        loop: true,
        startDelay: 500,
        backDelay: 3000,
        contentType: 'html',
    });
    var subheading = new Typed('.subheading', {
        strings: ["Full Stack Developer", "Web App Developer", "Graphic Design"],
        typeSpeed: 70,
        loop: true,
        startDelay: 500,
        backDelay: 200
    });


    //Portfolio Modal

    $('.project_1').on('click', function() {
        $('.modal_portfolio_1').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_1').css({"display":"none"});
    });
    $('.project_2').on('click', function() {
        $('.modal_portfolio_2').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_2').css({"display":"none"});
    });
    $('.project_3').on('click', function() {
        $('.modal_portfolio_3').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_3').css({"display":"none"});
    });
    $('.project_4').on('click', function() {
        $('.modal_portfolio_4').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_4').css({"display":"none"});
    });
    $('.project_5').on('click', function() {
        $('.modal_portfolio_5').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_5').css({"display":"none"});
    });
    $('.project_6').on('click', function() {
        $('.modal_portfolio_6').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_6').css({"display":"none"});
    });
    $('.project_7').on('click', function() {
        $('.modal_portfolio_7').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_7').css({"display":"none"});
    });
    $('.project_8').on('click', function() {
        $('.modal_portfolio_8').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_8').css({"display":"none"});
    });
    $('.project_9').on('click', function() {
        $('.modal_portfolio_9').css({"display":"block"});
    });
    $('.close_modal').on('click', function() {
        $('.modal_portfolio_9').css({"display":"none"});
    });


});