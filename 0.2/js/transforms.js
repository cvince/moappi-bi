$(document).ready(function() {
function init() {

    var div = document.getElementByClass("widgetTitle");

    // increase the scroll position by 10 px every 10th of a second
    setInterval(function() { 
        // make sure it's not at the bottom
        if (div.scrollTop < div.scrollHeight - div.clientHeight)
            div.scrollTop += 10; // move down
    }, 100); // 100 milliseconds

}
});