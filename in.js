
let AllAudio = {
    'a': 'audio', 'b': 'audiotwo', 'c': 'audiothree', 'd': 'audiofour',
    'e': 'audiofive', 'f': 'audiosix', 'g': 'audioseven', 'h': 'audioeight',
    'i': 'audionine', 'j': 'audioten', 'k': 'audioeleven', 'l': 'audiotaval', 'm': 'audiom'
};


document.addEventListener("keypress", (event) => {
    let key = event.key;

    let arr = Object.keys(AllAudio)

    // console.log(arr);

    arr.forEach(val => {

        // console.log(val);
        document.getElementById(val).style.color = 'black';
        document.getElementById(val).style.boxShadow = 'none';
        document.getElementById(AllAudio[val]).pause();
        document.getElementById(AllAudio[val]).load();
    });
    document.getElementById(AllAudio[key]).play();
    document.getElementById(key).style.color = 'white';
    document.getElementById(key).style.boxShadow = "10px 20px 30px white";
});
