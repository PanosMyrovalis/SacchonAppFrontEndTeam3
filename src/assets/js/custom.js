



(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {


            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });

            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
                      { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
                       { src: 'assets/img/3.jpg', fade: 1000, delay: 9000 },

                    ]
                })('overlay', {

                    src: 'assets/plugins/vegas/overlays/01.png'
                });

            });



            var menuLeft = document.getElementById('cbp-spmenu-s1'),
               menuRight = document.getElementById('cbp-spmenu-s2'),
           showLeftPush = document.getElementById('showLeftPush'),
           showRightPush = document.getElementById('showRightPush'),
           body = document.body;

            showLeftPush.onclick = function () {
                classie.toggle(this, 'active');
                classie.toggle(body, 'cbp-spmenu-push-toright');
                classie.toggle(menuLeft, 'cbp-spmenu-open');
                disableOther('showLeftPush');
            };
            showRightPush.onclick = function () {
                classie.toggle(this, 'active');
                classie.toggle(body, 'cbp-spmenu-push-toleft');
                classie.toggle(menuRight, 'cbp-spmenu-open');
                disableOther('showRightPush');
            };
            function disableOther(button) {

                if (button !== 'showLeftPush') {
                    classie.toggle(showLeftPush, 'disabled');
                }
                if (button !== 'showRightPush') {
                    classie.toggle(showRightPush, 'disabled');
                }
            }




        },

        initialization: function () {
            mainApp.main_fun();

        }

    }


    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



