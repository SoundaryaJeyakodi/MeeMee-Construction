(function($) {
   
    var slide = function(ele,options) {
        var $ele = $(ele);
        
        var setting = {
        	
            speed: 1000,
            
            interval: 2000,
            
            
        };
       
        $.extend(true, setting, options);
      
        if($(window).width()<=480)
        {
            var states = [
                { $zIndex: 1, width: 60, height: 70, top: 69, left: 34, $opacity: 0.2 },
                { $zIndex: 2, width: 100, height: 120, top: 59, left: 0, $opacity: 0.4 },
                { $zIndex: 3, width: 120, height: 178, top: 35, left: 18, $opacity: 0.7 },
                { $zIndex: 4, width: 170, height: 220, top: 0, left: 50, $opacity: 1 },
                { $zIndex: 3, width: 120, height: 178, top: 35, left: 90, $opacity: 0.7 },
                { $zIndex: 2, width: 100, height: 120, top: 59, left: 150, $opacity: 0.4 },
                { $zIndex: 1, width: 60, height: 70, top: 69, left: 200, $opacity: 0.2 }
            ];
        }
        else if(($(window).width()>480) && ($(window).width()<=600))
            {
                var states = [
                    { $zIndex: 1, width: 70, height: 80, top: 69, left: 84, $opacity: 0.2 },
                    { $zIndex: 2, width: 110, height: 130, top: 59, left: 0, $opacity: 0.4 },
                    { $zIndex: 3, width: 130, height: 188, top: 35, left: 68, $opacity: 0.7 },
                    { $zIndex: 4, width: 180, height: 250, top: 0, left: 100, $opacity: 1 },
                    { $zIndex: 3, width: 130, height: 188, top: 35, left: 190, $opacity: 0.7 },
                    { $zIndex: 2, width: 150, height: 130, top: 59, left: 210, $opacity: 0.4 },
                    { $zIndex: 1, width: 70, height: 80, top: 69, left: 250, $opacity: 0.2 }
                ];
            }
            else if(($(window).width()>600) && ($(window).width()<700))
                {
                    var states = [
                        { $zIndex: 1, width: 80, height: 90, top: 69, left: 54, $opacity: 0.2 },
                        { $zIndex: 2, width: 130, height: 160, top: 59, left: 0, $opacity: 0.4 },
                        { $zIndex: 3, width: 180, height: 190, top: 35, left: 28, $opacity: 0.7 },
                        { $zIndex: 4, width: 210, height: 260, top: 0, left: 50, $opacity: 1 },
                        { $zIndex: 3, width: 180, height: 190, top: 35, left: 130, $opacity: 0.7 },
                        { $zIndex: 2, width: 130, height: 160, top: 59, left: 180, $opacity: 0.4 },
                        { $zIndex: 1, width: 80, height: 90, top: 69, left: 270, $opacity: 0.2 }
                    ];
                }
        else if(($(window).width()>=700) && ($(window).width()<800))
            {
                var states = [
                    { $zIndex: 1, width: 90, height: 100, top: 69, left: 74, $opacity: 0.2 },
                    { $zIndex: 2, width: 120, height: 170, top: 59, left: 0, $opacity: 0.4 },
                    { $zIndex: 3, width: 180, height: 200, top: 35, left: 58, $opacity: 0.7 },
                    { $zIndex: 4, width: 220, height: 280, top: 0, left: 133, $opacity: 1 },
                    { $zIndex: 3, width: 180, height: 200, top: 35, left: 220, $opacity: 0.7 },
                    { $zIndex: 2, width: 120, height: 170, top: 59, left: 350, $opacity: 0.4 },
                    { $zIndex: 1, width: 90, height: 100, top: 69, left: 400, $opacity: 0.2 }
                ];
            }
            else if($(window).width()>=800 && ($(window).width()<1000))
                {
                    var states = [
                        { $zIndex: 1, width: 100, height: 110, top: 69, left: 94, $opacity: 0.2 },
                        { $zIndex: 2, width: 110, height: 180, top: 59, left: 0, $opacity: 0.4 },
                        { $zIndex: 3, width: 200, height: 220, top: 35, left: 78, $opacity: 0.7 },
                        { $zIndex: 4, width: 230, height: 300, top: 0, left: 153, $opacity: 1 },
                        { $zIndex: 3, width: 200, height: 220, top: 35, left: 250, $opacity: 0.7 },
                        { $zIndex: 2, width: 110, height: 180, top: 59, left: 370, $opacity: 0.4 },
                        { $zIndex: 1, width: 100, height: 110, top: 69, left: 420, $opacity: 0.2 }
                    ];
                }
        
            else if($(window).width()>1000)
                {
                    var states = [
                        { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
                        { $zIndex: 2, width: 210, height: 250, top: 59, left: 0, $opacity: 0.4 },
                        { $zIndex: 3, width: 250, height: 298, top: 35, left: 110, $opacity: 0.7 },
                        { $zIndex: 4, width: 304, height: 368, top: 0, left: 263, $opacity: 1 },
                        { $zIndex: 3, width: 250, height: 298, top: 35, left: 470, $opacity: 0.7 },
                        { $zIndex: 2, width: 210, height: 250, top: 59, left: 620, $opacity: 0.4 },
                        { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
                    ];
                }
            
        

        var $lis = $ele.find('.li');
        var timer = null;

        
        $ele.find('.hi-next').on('click', function() {
            states.push(states.shift());
            move();
          
        });
        $ele.find('.hi-prev').on('click', function() {
            next();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

               
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('.img').css('opacity', state.$opacity);
            });
        }

        
        function next() {
           
            states.unshift(states.pop());
            move();
        }
        function prev() {
           
            states.push(states.shift());
            move();
        }

        function autoPlay() {
            timer = setInterval(prev, setting.interval);
        }
    }
   
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);
