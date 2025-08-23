const isIphone = /iPhone/i.test(navigator.userAgent);

if (isIphone) {
    document.getElementById("backgroundheadertxt").classList.add("iphone");
}