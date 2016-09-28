
        $(function() {
            $('.big-image').click(function() {
                $('.big-image')
                    .animate({top: '99%'}, 200, function() {
                        $('.big-image')
                        .css('background-image', "url('assets/from-small.jpg')")
                        .animate({top: '0'}, 200, function() {
                        });
                    })
                console.log('aaa');
            });
        })
    