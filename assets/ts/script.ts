let clicks : number = 0;

function counter() {
    clicks += 1;
    document.getElementById('clicks').innerHTML = clicks.toString();
}