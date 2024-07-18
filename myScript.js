document.getElementById("clickMe").addEventListener("click", function() {        
    if ( document.getElementById("changeMe").style.zIndex=="-1") {
        document.getElementById('changeMe').style.zIndex="5";
    } else {
        document.getElementById('changeMe').style.zIndex="-1";
    }});