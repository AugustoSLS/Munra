const isIphone = /iPhone/i.test(navigator.userAgent);

if (isIphone) {
    document.getElementById("backgroundheadertext").classList.add("iphone");
    document.getElementById("mun-ra").classList.add("iphonelogo");
    document.getElementById("btnNav").classList.add("iphonebtnmenu");
}