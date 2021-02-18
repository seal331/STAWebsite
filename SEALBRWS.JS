function seal(){ 
	var myImage = document.querySelector('img.anybrowsergif');
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../../IMAGES/ANY_BROWSER_SEAL.GIF') {
        myImage.setAttribute ('src', '../../IMAGES/ANY_BROWSER.GIF');
        myImage.setAttribute ('height', '');
    } else {
        myImage.setAttribute ('src', '../../IMAGES/ANY_BROWSER_SEAL.GIF');
        myImage.setAttribute ('height', '29');
    }
};

function nxeaster(){ 
    document.getElementById("nxeaster").href="315.HTML";
};