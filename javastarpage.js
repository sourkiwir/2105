const musicBtn = document.getElementById("musicBtn");

const song = document.getElementById("song");

const icon = document.getElementById("icon");

let playing = false;

/* =========================
   PLAYER DE MÚSICA
========================= */

if(musicBtn){

    musicBtn.addEventListener("click", () => {

        if(!playing){

            song.play();

            icon.innerHTML = "❚❚";

            playing = true;

        } else {

            song.pause();

            icon.innerHTML = "▶";

            playing = false;
        }

    });

}

/* =========================
   BOTÃO CONTINUE EXPLORANDO
========================= */

function explorar(){

    window.location.href = "photos.html";

}
