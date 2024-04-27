$(document).ready(function () {
    $("header nav h2.sobrenos").click(function () {
        const destino = $("section.sobre");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("header nav h2.comofunciona").click(function () {
        const destino = $("section.comoFunciona");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("header nav h2.duvidas").click(function () {
        const destino = $("section.section-duvidas");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

    $("header nav h2.contato").click(function () {
        const destino = $("section.section-contato");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

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

    $("button.estou-interessado").click(function () {
        const destino = $(".form");
        $("html").animate({
            scrollTop: destino.offset().top
        }, 500)
    })

});

$(document).ready(function () {
    $('button.submit').click(function(){
        alert("Cadastrado!");
    });
});








