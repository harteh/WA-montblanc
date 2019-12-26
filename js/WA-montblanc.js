$("document").ready(function(){
    
    var menu = $("header .menu ul"),
        nav = $("#dep1"),
        nav_li = $("#dep1 ul li"),
        subMenu = $("#dep2 ul");

    $(menu).click(function(){
        // 메뉴 버튼 클릭 시 네비게이션 이 보여짐
        nav.toggle()        
    });
    
    $(nav_li).hover(function(){
        // 네비게이션에 호버 되면 서브 메뉴가 보여짐
        var i = $(this).index();
        $("#dep2").show()
        subMenu.eq(i).show()
    }, function(){
        // 호버가 빠지면 서브 메뉴가 사라짐
        $("#dep2").hide()
        subMenu.hide()
    });     // 하위 메뉴 설정 끝
    

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