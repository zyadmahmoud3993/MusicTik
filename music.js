function loading() {
    let play = document.getElementById('play');
    let stop = document.getElementById('stop');
    let file = document.getElementById('file');
    let range = document.querySelector('#Range');
    let contanerm = document.querySelector('.contanerm');

    let wavesurfer;
    file.onchange = () => {
        contanerm.style.transform = 'translateY(200px)';
        if (wavesurfer) {
            wavesurfer.destroy();
        }
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#413f3fff',
            progressColor: '#d31a1aff',
            cursorWidth: 4,
            url: `${URL.createObjectURL(file.files[0])}`,

        })
        if(pcOrmobile == 'mobile'){
            wavesurfer.setVolume(.15);
        }
        wavesurfer.on('interaction', () => {
            wavesurfer.play()
        })

        play.onclick = () => {
            wavesurfer.play()
        }
        stop.onclick = () => {
            wavesurfer.stop()
        }

        range.oninput = function () {
            console.log(this.value);
            wavesurfer.zoom(Number(this.value));
        };

    }




}
