/**
 * Created by Jigalag on 03.08.2017.
 */


$(document).ready(function () {
    $('.contentSideBarItemFirst').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.contentBar').show();
            $('.treeBar').hide();
            $('.rightTree').hide().find('.mainTree').hide();
            $('.leftTree').hide().find('.mainTree').hide();
        }
        else{
            $('.contentSideBarItemFirst').removeClass('active');
            $('.contentSideBarItemSecond').removeClass('active');
            $(this).addClass('active');
            var secondTree = $(this).data('side-menu');
            $('.contentBar').hide();
            $('.treeBar').show();
            $('.rightTree').hide().find('.mainTree').hide();
            $('.leftTree').show().find('.mainTree').hide();
            $('.leftTree').find('.mainTree[data-side-open-menu="'+secondTree+'"]').show();
            if (secondTree > 3){
                $('.leftTree').find('.mainTree[data-side-open-menu="'+secondTree+'"]').css({
                    'margin-top': ($(this).position().top - 99) + 'px'
                })
            }
        }
    });
    $('.contentSideBarItemSecond').on('click', function (e) {
        e.preventDefault();
        $('.contentSideBarItemSecond').removeClass('active');
        $(this).addClass('active');
        var thirdTree = $(this).data('side-menu');
        $('.rightTree').show().find('.mainTree').hide();
        $('.rightTree').find('.mainTree[data-side-open-menu="'+thirdTree+'"]').show();
        if (parseInt(thirdTree.split('_')[1]) > 3){
            $('.rightTree').find('.mainTree[data-side-open-menu="'+thirdTree+'"]').css({
                'margin-top': ($(this).position().top - 99) + 'px'
            })
        }
    });
});