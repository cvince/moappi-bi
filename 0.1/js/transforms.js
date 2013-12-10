function resizeFont(elemToR){
    parentW = elemToR.width();
    elemToR.find('.widget').each(function(n){
        curRow = $(this);
        curWidth = curRow.width();
        var ratio =  parentW / curWidth;
        console.log(ratio);
        newFontSize = ratio * initialSize;
        curRow.css({
            'font-size': newFontSize +'px',
            'line-height' : newFontSize / 1.2 + 'px' 
            });
    });
}

$(document).ready(function(){
    initialSize = 10;
    $('.justify-this').each(function(){
        resizeFont($(this));
    });
});​