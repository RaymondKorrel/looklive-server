$(document).ready(function(){
    $('.main__appearance__info__products__inner__product').first().addClass('main__appearance__info__products__inner__product-active');
    $(".main__appearance__img__product-indicator[data-uuid='"+$('.main__appearance__info__products__inner__product').first().data('uuid')+"']").addClass('main__appearance__img__product-indicator-active');

    $('.main__appearance__img__product-indicator').on('click', function(e){
        var id = $(e.currentTarget).data('uuid');
        $('.main__appearance__img__product-indicator-active').removeClass('main__appearance__img__product-indicator-active');
        $(e.currentTarget).addClass('main__appearance__img__product-indicator-active');
        $('.main__appearance__info__products__inner__product.main__appearance__info__products__inner__product-active').removeClass('main__appearance__info__products__inner__product-active');
        $(".main__appearance__info__products__inner__product[data-uuid='"+id+"']").addClass('main__appearance__info__products__inner__product-active');
    });
});
