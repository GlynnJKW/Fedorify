let s1 = document.createElement('script');
s1.src = chrome.extension.getURL('scripts/three.js');
document.body.appendChild(s1);

s1.onload = function(){
    let s2 = document.createElement('script');
    s2.src = chrome.extension.getURL('scripts/three-obj-loader.js');
    document.body.appendChild(s2);

    s2.onload = function(){
        let s3 = document.createElement('script');
        s3.src = chrome.extension.getURL('scripts/model-element.min.js');     
        document.body.appendChild(s3);   
    };
};