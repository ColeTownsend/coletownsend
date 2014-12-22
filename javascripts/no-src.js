var elems = document.getElementsByTagName('*');
for(var i=0;i < elems.length;i++){
    var attr = (window.devicePixelRatio >= 1.2)? elems[i].getAttribute('data-2x') : elems[i].getAttribute('data-src');
    if(attr && elems[i].tagName == 'IMG'){
        elems[i].src = attr;
    } else if(attr){
        elems[i].style.cssText += 'background-image: url('+attr+')';
    }
}
