function GenerateWord() {
    const word = document.getElementById("word");
    word.classList.add("border");
    const words = [
        "Bollocks",
        "Bugger",
        "Sod off",
        "Arse",
        "Bastard",
        "Bellend",
        "Wanker",
        "Bloody Hell",
        "Knobhead",
        "Muppet",
        "Fuck off",
        "Cunt",
        "Dickhead",
        "Piss off",
        "Shit",
        "Idiot",
        "Twat",
        "Bullshit",
        "Cock",
        "Snatch"
    ];

    let i = Math.floor(Math.random() * words.length);
    word.innerHTML = words[i];
}