$('#header').load('./commonModule/header/header.html');
$('.side_cover').load('./commonModule/aside/sideGnb.html', () => {
    /* ================== 공통 JS ==================== */
    // 사이드메뉴 열기
    $('.hamburger').click(function(){
        $(".side_header").css({ opacity:1, left: "0" });
        $(".side_cover").css({ opacity:1, left: "0" });
        $('.recommend, .bestseller, .season_recommend, .flagship, .sns_review, footer').hide();
      
    });
    // 사이드메뉴 닫기
    $('.side_header .close_btn').click(function(){
      $(".side_header").css({ opacity:0, left: "-100vw" });
      $(".side_cover").css({ opacity:0, left: "-100vw" });
      $('.recommend, .bestseller, .season_recommend, .flagship, .sns_review, footer').show();
    
    });
      
    // depth메뉴 숨기기
    $('.nav_d2_box, .nav_d3_box').hide();
    
    $('.nav_d1 > a').on('click', function(e) {
      e.preventDefault();
    
      $(this).parent().siblings().removeClass('on');
      $(this).parent().toggleClass('on');
    
      var $depthTarget = $(this).next('.nav_d2_box');
      $depthTarget.slideToggle();
      
      $('.nav_d2_box').not($depthTarget).slideUp();
    });
    
    // 2depth 메뉴 클릭 이벤트
    $('.nav_d2 > a').on('click', function(e) {
      e.preventDefault();
    
      $(this).parent().siblings().removeClass('on');
      $(this).parent().toggleClass('on');
    
      var $depthTarget = $(this).next('.nav_d3_box');
      $depthTarget.slideToggle();
    
      $('.nav_d3_box').not($depthTarget).slideUp();
    });
    
    // 3depth 메뉴 클릭 이벤트
    $('.nav_d3 > a').on('click', function(e) {
      e.preventDefault();
    
      $(this).parent().siblings().removeClass('on');
      $(this).parent().toggleClass('on');
    });
    
    
    /* ============ PC GNB ============ */
    // $('.pc_nav_d2_box').hide();
    $('.pc_nav_d1').mouseover(function() {
      $('.pc_nav_d1').find('.pc_nav_d2_box').hide();
      $(this).find('.pc_nav_d2_box').show();
      $('.hover_border').css('opacity', 1);
    });
    
    $('#header').mouseleave(function() {
      $(this).find('.pc_nav_d2_box').hide();
      $('.hover_border').css('opacity', 0);
    });
    
    /* ============ /PC GNB ============ */
});
$('#footer').load('./commonModule/footer/footer.html', () => {
    // footer 토글 (모바일/태블릿)
    $('.toggle_info').hide();
    $('.footer_toggle').click(function(){
      if($(this).children('.toggle_btn').hasClass('is_open')){
        $('.toggle_btn').removeClass('is_open');
        $('.toggle_info').hide();
      }else {
        $('.toggle_btn').addClass('is_open');
        $('.toggle_info').show();
      }
    });
});


/* ================== /공통 JS ==================== */
