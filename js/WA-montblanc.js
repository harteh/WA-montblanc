$("document").ready(function(){
    
    $(window).scroll(function(){
        // 세로 슬라이드 시 적용 된것을 가로 슬라이드 시 적용으로 후처리 필요
        var current = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
        // outerHeight = 보더 값을 포함한 세로길이 값
        $(".disney-indicator").width(current + "%")
    });
    // 디즈니 슬라이드 인디게이터 설정  끝

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

    var swiper = new Swiper('.swiper-container');

})