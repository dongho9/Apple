$(document).ready(function(){
    // 마지막 슬라이드를 첫 번째 슬라이드 앞으로 이동
    $('.slide_Box:last-child').insertBefore('.slide_Box:first-child');
    // 초기 중앙 정렬을 위한 margin-left 설정
    $('.slide_wrap').css('margin-left', '-630px');
    $('.s01').css('opacity','100%');
    $('.s01').find('.slide_Text').css({'opacity' : '1', 'bottom' : '60px'})
    function slide(){   
        $('.slide_wrap').stop().animate({'margin-left': '-1260px'}, 300, function() {
            // 첫 번째 슬라이드를 마지막 슬라이드 뒤로 이동
            $('.slide_Box:first-child').insertAfter('.slide_Box:last-child');
            // 중앙 정렬을 유지하기 위해 margin-left를 초기화
            $('.slide_wrap').css('margin-left', '-630px');
            $('.slide_Box').find('.slide_Text').css({'opacity' : '0'})
            $('.slide_Box').css('opacity','50%');
            $('.slide_Box:nth-child(2)').css('opacity', '100%');
            $('.slide_Box:nth-child(2)').find('.slide_Text').css({'opacity' : '1', 'bottom' : '60px'})
            
            $('.carousel ul li').click(function(){
                $('.carousel ul li').removeClass('act');
                $(this).addClass('act');    
        
                var index = $(this).index()+1; // 클릭된 항목의 인덱스를 가져옵니다.
                console.log(index);
                var slide_length = index * 630;
                $('slide_wrap').css('margin-left','-${slide_length}')
                // 슬라이드 위치를 계산 (여기서 630px은 슬라이드의 너비)
        
                // margin-left를 동적으로 설정하여 슬라이드 이동
            });
            
        }); 
    }
    
    // 초기 슬라이드를 한번 실행
    // 3초마다 슬라이드 이동
    let Timer = setInterval(slide, 3000);
    
});
