
    $(window).load(function () {
                var images = [{ image:'/getmedia/5b49cd50-43f5-4ebf-8cc6-e6dbb20f77a5/ANH004-Website-Edited-Overview-Roast-Lamb/?width=310&height=200&ext=.jpg', url:'/recipes/roast-leg-of-lamb-recipe' },{ image:'/getmedia/28389f70-bb61-4db6-befb-fdbd212cdf84/PAY006-Website-Edited-Overview-Thai-Basil-Ganache/?width=310&height=200&ext=.jpg', url:'/recipes/goats-cheese-lemon-ganache-recipe' }];
                var html = '';
                for (var i = 0; i < images.length; i++)
                    html += "<div class='slide ' style='display:none;'>
                <a href='" + images[i].url + "'><img style='' src='" + images[i].image + "'/></a></div>";

                var $sb = $('#p_lt_zoneMain_mainPagePlaceholder_mainPagePlaceholder_lt_zoneColumnOne_featuredRecipesCarousel_carousel_carouselSidebar');
                $sb.find('.base-slide').after(html);
                var nToLoad = images.length;
                $sb.find('.slide').not('.base-slide').find('img').load(function() { 
                    nToLoad--;
                    if (nToLoad == 0) {
                        $sb.simpleCarousel({ slides: $sb.find('.slide'), additionalSlides: $sb.find('.slide-desc'), buttons: $sb.find('.slide-button'), auto: true, delay: 6000, tranSpeed: 1000 });
                    }
                });
            });