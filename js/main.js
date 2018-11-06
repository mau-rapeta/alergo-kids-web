// scroll animation 

$('.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// desplazamiento del nav móvil

$(document).ready(main);

var contador = 1;

function main(){
    $('.navigation__btn, .nav-link').click(function(){
        if(contador == 1){
            $('.navMobile').animate({
                left: '0'
            });
            contador = 0;
        }else{
            contador = 1;
            $('.navMobile').animate({
                left: '-100%'
            });
        }
    });
};

// Activador de los Popups de la sección "servicios"

$('.servicios__link').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks:{
        beforeOpen: function(){
            this.st.mainClass =
        this.st.el.attr('data-effect');
        }
    }
});