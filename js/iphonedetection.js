const isIphone = /iPhone/i.test(navigator.userAgent);

if (isIphone) {
    document.getElementById("backgroundheadertext").classList.add("iphone");
}