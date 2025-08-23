const isIphone = /iPhone/i.test(navigator.userAgent);

if (isIphone) {
    document.getElementById("backgroundheadertext").classList.add("iphone");
    document.getElementById("backgroundheadertext").classList.add("iphone-logo");
}