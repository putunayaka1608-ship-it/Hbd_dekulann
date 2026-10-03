/* =====================================
   ELEMENTS
===================================== */

const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const letter =
    document.getElementById("letter");

const final =
    document.getElementById("final");


const startBtn =
    document.getElementById("startBtn");

const letterBtn =
    document.getElementById("letterBtn");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const replayBtn =
    document.getElementById("replayBtn");


const music =
    document.getElementById("music");

const typing =
    document.getElementById("typing");


const bearGuide =
    document.getElementById("bearGuide");

const bearSpeech =
    document.getElementById("bearSpeech");


/* =====================================
   BACKGROUND STARS
===================================== */

const stars =
    document.getElementById("stars");


for (let i = 0; i < 140; i++) {

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.opacity =
        Math.random();

    stars.appendChild(star);

}


/* =====================================
   TYPEWRITER
===================================== */

const message =
`Semoga hari ini menjadi awal dari banyak hal indah yang akan datang. Semoga setiap langkahmu dipenuhi kebahagiaan dan selalu ada alasan untuk tersenyum. ❤️`;

let typingIndex = 0;


function typeMessage() {

    if (
        typingIndex <
        message.length
    ) {

        typing.textContent +=
            message.charAt(
                typingIndex
            );

        typingIndex++;

        setTimeout(
            typeMessage,
            35
        );

    }

}


/* =====================================
   SCREEN TRANSITION
===================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    setTimeout(() => {

        screen.classList.add(
            "active"
        );

    }, 100);

}


/* =====================================
   HEARTS
===================================== */

function createHeart(amount = 30) {

    const container =
        document.getElementById(
            "hearts"
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement(
                    "div"
                );

            heart.className =
                "floating-heart";

            heart.innerHTML =
                Math.random() > .5
                    ? "♥"
                    : "♡";


            heart.style.left =
                Math.random() * 100 +
                "%";


            heart.style.fontSize =
                12 +
                Math.random() * 25 +
                "px";


            heart.style.animationDuration =
                5 +
                Math.random() * 5 +
                "s";


            container.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 10000);

        }, i * 80);

    }

}


/* =====================================
   SAKURA
===================================== */

function createSakura(amount = 30) {

    const container =
        document.getElementById(
            "sakura"
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const petal =
                document.createElement(
                    "div"
                );

            petal.className =
                "sakura-piece";

            petal.innerHTML =
                "🌸";


            petal.style.left =
                Math.random() * 100 +
                "%";


            petal.style.fontSize =
                12 +
                Math.random() * 18 +
                "px";


            petal.style.animationDuration =
                5 +
                Math.random() * 5 +
                "s";


            container.appendChild(
                petal
            );


            setTimeout(() => {

                petal.remove();

            }, 11000);

        }, i * 150);

    }

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti(
    amount = 120
) {

    const container =
        document.getElementById(
            "confetti"
        );


    const colors = [
        "#ff8fc8",
        "#ffffff",
        "#ffd66b",
        "#bda4ff",
        "#8ff0ff"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const piece =
                document.createElement(
                    "div"
                );

            piece.className =
                "confetti";


            piece.style.left =
                Math.random() * 100 +
                "%";


            piece.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            piece.style.transform =
                `rotate(${
                    Math.random() * 360
                }deg)`;


            piece.style.animationDuration =
                2 +
                Math.random() * 3 +
                "s";


            container.appendChild(
                piece
            );


            setTimeout(() => {

                piece.remove();

            }, 6000);

        }, i * 15);

    }

}


/* =====================================
   BEAR GUIDE
===================================== */

function bearTalk(text) {

    bearSpeech.innerHTML =
        text;

    bearGuide.classList.remove(
        "hidden"
    );

}


function bearPoint() {

    bearGuide.classList.remove(
        "walking"
    );

    bearGuide.classList.remove(
        "happy"
    );

    bearGuide.classList.add(
        "pointing"
    );

}


function bearWalk() {

    bearGuide.classList.remove(
        "pointing"
    );

    bearGuide.classList.remove(
        "happy"
    );

    bearGuide.classList.add(
        "walking"
    );

}


function bearHappy() {

    bearGuide.classList.remove(
        "walking"
    );

    bearGuide.classList.remove(
        "pointing"
    );

    bearGuide.classList.add(
        "happy"
    );

}


/* =====================================
   OPENING BEAR
===================================== */

setTimeout(() => {

    bearTalk(`
        Haiii 👋<br>
        Aku beruang kecil yang akan
        menemanimu malam ini 🧸
    `);


    bearPoint();

}, 1200);


/* =====================================
   START
===================================== */

startBtn.addEventListener(
    "click",
    () => {

        music.volume = 0.5;

        music.play().catch(() => {});


        bearHappy();


        bearTalk(`
            Yeayyy! ❤️<br>
            Kita mulai petualangannya!
        `);


        showScreen(main);


        typingIndex = 0;

        typing.textContent = "";


        setTimeout(() => {

            typeMessage();

        }, 1000);


        createSakura(45);

        createHeart(45);


        setTimeout(() => {

            bearWalk();

            bearTalk(`
                Lihat... ✨<br>
                Ada seseorang spesial di sini.
            `);

        }, 3500);


        setTimeout(() => {

            bearPoint();

            bearTalk(`
                Cantik ya? 🧸💗<br>
                Tapi masih ada sesuatu...
            `);

        }, 6500);


        setTimeout(() => {

            bearPoint();

            bearTalk(`
                Coba buka surat kecil itu 💌
            `);

        }, 9000);

    }
);


/* =====================================
   LETTER
===================================== */

letterBtn.addEventListener(
    "click",
    () => {

        showScreen(letter);


        createSakura(35);

        createHeart(35);


        bearHappy();


        bearTalk(`
            Dibuka juga! 🧸💗<br>
            Baca pelan-pelan ya...
        `);


        setTimeout(() => {

            bearPoint();

            bearTalk(`
                Hmm... 👀<br>
                Sepertinya masih ada
                satu kejutan lagi.
            `);

        }, 5000);


        setTimeout(() => {

            bearPoint();

            bearTalk(`
                Kalau sudah siap...<br>
                tekan tombol itu ✨
            `);

        }, 8000);

    }
);


/* =====================================
   FINAL SURPRISE
===================================== */

surpriseBtn.addEventListener(
    "click",
    () => {

        bearHappy();


        bearTalk(`
            3... 2... 1... 🎉<br>
            SURPRISE!!! ❤️
        `);


        createHeart(180);

        createSakura(90);

        createConfetti(180);


        showScreen(final);


        music.volume = 0.65;


        setTimeout(() => {

            bearTalk(`
                HAPPY BIRTHDAY! 🧸❤️<br>
                Semoga hari ini indah!
            `);

        }, 3500);


        setTimeout(() => {

            bearTalk(`
                Jangan lupa tersenyum ya! 🌸
            `);

        }, 7000);

    }
);


/* =====================================
   REPLAY
===================================== */

replayBtn.addEventListener(
    "click",
    () => {

        document.getElementById(
            "hearts"
        ).innerHTML = "";


        document.getElementById(
            "sakura"
        ).innerHTML = "";


        document.getElementById(
            "confetti"
        ).innerHTML = "";


        typing.textContent = "";

        typingIndex = 0;


        music.pause();

        music.currentTime = 0;


        showScreen(opening);


        bearGuide.classList.remove(
            "happy"
        );

        bearGuide.classList.remove(
            "walking"
        );

        bearGuide.classList.remove(
            "pointing"
        );


        bearTalk(`
            Kita mulai lagi! 👋🧸<br>
            Kali ini jangan buru-buru ya.
        `);


        setTimeout(() => {

            bearPoint();

            bearTalk(`
                Klik tombolnya ✨
            `);

        }, 1500);

    }
);