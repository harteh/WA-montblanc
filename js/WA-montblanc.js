$("document").ready(function(){   

    var menu = $("header .menu"),        
        nav = $("#dep1"),
        nav_li = $("#dep1 ul li"),
        subMenu = $("#dep2 ul"),
        i = 0;

    $(menu).click(function(){
        // 메뉴 버튼 클릭 시 네비게이션(메뉴)이 보여지고
        //  메뉴 버튼이 변경 됨
        nav.toggle()
        menu.toggleClass("close")
    });
    
    nav_li.hover(function(){
        // 네비게이션(주 메뉴)에 호버 되면 서브 메뉴가 보여짐
        i = $(this).index();

        $(this).find("a").css("textShadow", "#cecece 10px 0 10px")
        $("#dep2").show()
        subMenu.eq(i).show()

    }, function(){
        // 호버가 빠지면 서브 메뉴가 사라짐
        $(this).find("a").css("textShadow", "")
        subMenu.hide()
    });     // 하위 메뉴 설정 끝

    $("#dep2").hover(function(){
        subMenu.eq(i).show()
        $("#dep").show();
    }, function(){
        subMenu.hide()
    });     // 서브 메뉴에 호버시에도 메뉴 유지하게 설정 끝


    var swiper = new Swiper('#disney .swiper-container', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        slidesPerView: 2
    });     // 디즈니 아이템 슬라이드 끝

    var swiper = new Swiper('#trolley .swiper-container',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });     // 트롤리 슬라이드 끝

})