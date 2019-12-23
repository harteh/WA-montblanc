$("document").ready(function(){
    
    $(window).scroll(function(){
        // 세로 슬라이드 시 적용 된것을 가로 슬라이드 시 적용으로 후처리 필요
        var current = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
        // outerHeight = 보더 값을 포함한 세로길이 값
        $(".disney-indicator").width(current + "%")
    })
    // 디즈니 슬라이드 인디게이터 영역  끝


})