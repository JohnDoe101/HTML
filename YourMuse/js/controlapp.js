function validateForm() {
    var x = document.forms["validateChannel"]["channelID"].value;
    var channelLength = x.length;
    var authKey = 91162629;
    var checkedChars = x.toLowerCase().search(/[a-z0-9\-\_]/g);
    
    
    if (channelLength < 10 || channelLength > 30) {        
        alert("Inaproppriate channel length: " + channelLength + "\nThe channelID must be less than 30 and more than 10 chars!");
        return false;
    }
    
    if (checkedChars === -1){
        alert("we've found inapropprate characters");
        return false;        
    }
    
    
    
   /* xhttp.open("GET", "http://130.211.68.254:3000/Service/Console/YoutubeChannelStats?channelID=" + authKey, true);
    xhttp.send();*/
}

