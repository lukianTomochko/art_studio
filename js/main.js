$(document).ready(function () {

    $(".menu_burger__btn").on("click", function () {
        $(".menu_burger").toggleClass("menu_burger__active");
    });

    $(".ourDirections_item").mouseenter(function () {
        $(this).children(":first").css("transform", "translateX(0%)")
    });
    $(".ourDirections_item").mouseleave(function () {
        $(this).children(":first").css("transform", "translateX(101%)")
    });

    // scoll animate of gallery menu

    $(".menuOfgallary .menuOfgallary_item:nth-child(1)").on("click", function (event) {
        event.preventDefault();
        var top = $(".partOfgallary:nth-child(1) .partOfgallary_title").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    $(".menuOfgallary .menuOfgallary_item:nth-child(2)").on("click", function (event) {
        event.preventDefault();
        var top = $(".partOfgallary:nth-child(2) .partOfgallary_title").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    $(".menuOfgallary .menuOfgallary_item:nth-child(3)").on("click", function (event) {
        event.preventDefault();
        var top = $(".partOfgallary:nth-child(3) .partOfgallary_title").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    $(".menuOfgallary .menuOfgallary_item:nth-child(4)").on("click", function (event) {
        event.preventDefault();
        var top = $(".partOfgallary:nth-child(4) .partOfgallary_title").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    $(".menuOfgallary .menuOfgallary_item:nth-child(5)").on("click", function (event) {
        event.preventDefault();
        var top = $(".partOfgallary:nth-child(5) .partOfgallary_title").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $(".partOfgallary_mainBlock_item").on("click", function () {

        if (screen.width > 1000) {

            var classOfelem = $(this).attr("class");
            if (classOfelem != "partOfgallary_mainBlock_item partOfgallary_mainBlock_item_imgActive") {
                $(".partOfgallary_mainBlock_item").removeClass("partOfgallary_mainBlock_item_imgActive");
                $(this).addClass("partOfgallary_mainBlock_item_imgActive");
            }
            if (classOfelem == "partOfgallary_mainBlock_item partOfgallary_mainBlock_item_imgActive") {
                $(this).removeClass("partOfgallary_mainBlock_item_imgActive");
            }

        }

    });

    $(document).on("click", function () {
        if (screen.width > 1000) {
            $(".partOfgallary_mainBlock_item").removeClass("partOfgallary_mainBlock_item_imgActive");
        }
    });

    $(document).on("click", ".partOfgallary_mainBlock_item", function (e) {
        e.stopPropagation();
    });






    // Animate scroll

    new WOW().init();

});
