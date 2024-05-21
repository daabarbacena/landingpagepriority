$(document).ready(function () {
    $(".header nav h2.sobrenos").click(function () {
        const destino = $("section.sobre");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $(".header nav h2.comofunciona").click(function () {
        const destino = $("section.comoFunciona");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $(".header nav h2.duvidas").click(function () {
        const destino = $("section.section-duvidas");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $(".header nav h2.contato").click(function () {
        const destino = $("section.section-contato");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    /* SEÇÃO SOBRE NÓS */

    $("nav ul li.sobrenos").click(function () {
        const destino = $("section.sobre");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("nav ul li.comofunciona").click(function () {
        const destino = $("section.comoFunciona");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("nav ul li.duvidas").click(function () {
        const destino = $("section.section-duvidas");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("nav ul li.contato").click(function () {
        const destino = $("section.section-contato");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    /* SEÇÃO DÚVIDAS */

    function mostrarResposta(elementoResposta) {
        if (elementoResposta.is(':visible')) {
            elementoResposta.slideUp();
            elementoResposta.prev('.accordion-title').removeClass('active');
        } else {
            $('.accordion-content').slideUp();
            $('.accordion-title').removeClass('active');
            elementoResposta.slideDown();
            elementoResposta.prev('.accordion-title').addClass('active');
        }
    }

    $(document).ready(function () {
        $('.accordion-title').click(function () {
            const elementoResposta = $(this).next('.accordion-content');
            mostrarResposta(elementoResposta);
        });
    });

    /* SEÇÃO SOBRE NÓS */

    $("button.estou-interessado").click(function () {
        const destino = $(".form");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    /* SEÇÃO CONTATO */

    $("#campo-cpf").mask("000-000-000.00");
    $("#campo-telefone").mask("(00) 00000-0000");

    /* MENU MOBILE */

    $(".menu-hamburguer").click(function(){
        $(".container-menu").slideToggle();
    })

    /* BOTÃO DE VOLTAR A PAGINA */

});










