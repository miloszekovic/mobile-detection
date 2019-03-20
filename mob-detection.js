// mobile device detection via jQuery

var ua = navigator.userAgent.toLowerCase();
    function removeSpaces(ua) {
        return ua.split(' ').join('');
    }
    ua = removeSpaces(ua);

var iOS = ua.match(/(iphone|ipod|ipad)/);
    if(iOS) {
        $('body').addClass('this-is-ios');
    }

var iPad = ua.match(/(ipad)/);
    if(iPad) {
        $('body').addClass('this-is-ipad');
    }

var iPhone = ua.match(/(iphone|ipod)/);
    if(iPhone) {
        $('body').addClass('this-is-iphone');
    }

var android = ua.match(/(android)/);
    if(android) {
        $('body').addClass('this-is-android');
    }

var blackberry = ua.match(/(blackberry)/);
    if(blackberry) {
        $('body').addClass('this-is-bb');
    }

var iemobile = ua.match(/(iemobile)/);
    if(iemobile) {
        $('body').addClass('this-is-iem');
    }