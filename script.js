let display = document.getElementById("codeDisplay");
let btn2 = document.getElementById("copybtn");
let btn1 = document.getElementById("colorbtn");
function genrateHEX() {
    // RRGGBB
    let HEX = "#" + Math.floor(Math.random() * 1677716).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = HEX;
    display.innerText = HEX;
    btn1.innerText = "Clicked!";
    setTimeout(() => {
        btn1.innerText = "Click me";
    }, 100);
}
function copyToClipboard() {
    if (display.innerText != "") {
        navigator.clipboard.writeText(display.innerText).then(() => {
            btn2.style.backgroundColor = "#32CD32";
            btn2.innerText = "Copy ✅";
            setTimeout(() => {
                btn2.style.backgroundColor = "";
                btn2.innerText = "Copy";
            }, 1000);
        }).catch(error => {
            alert("copy failed", error);
        })
    }
}