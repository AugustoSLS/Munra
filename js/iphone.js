function isIOS()
{    
    var ua = navigator.userAgent.toLowerCase();

    //Lista de dispositivos que acessar
    var iosArray = ['iphone', 'ipod'];

    var isApple = false;

    //valida seu array
    iosArray.forEach(function(item){

        if (ua.indexOf(iosArray[item]) != -1)
        {
            isApple = true;
        }

    });

    return isApple;
}

if(isIOS())
{
    $('background-header-text').css({
        '-webkit-transform': 'translate(50%, 50%)',
        'transform': 'translate(50%, 50%)'
    });
}