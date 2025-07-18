var grid = document.querySelector('.grid')
var body = document.body;
let length = 1000;
(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) length = 500; })(navigator.userAgent || navigator.vendor || window.opera);
window.onload = () => {
    for (let index = 0; index < length; index++) {
        grid.innerHTML += '<div class="box"></div>'
        let start = 0;
        let end = 40;
        let _index = 0;
        for (let index = 0; index < 25; index++) {

            let boxs = document.querySelectorAll(`.grid>div:nth-child(n+${start}):not(:nth-child(n+${end}))`)
            if (_index == 0) {
                boxs.forEach((_this) => {
                    _this.style.marginLeft = '78px'
                    _this.style.marginRight = '-90px'
                    _this.style.marginTop = '-38px'
                })
                _index++;
            } else {
                boxs.forEach((_this) => {
                    _this.style.marginLeft = '0px'
                    _this.style.marginRight = '0px'
                    _this.style.marginTop = '-38px'
                })
                _index--;
            }

            start += 40;
            end += 40;
        }
    }

    body.innerHTML += `
    <div class="blur"></div>
    <div class="upcontaner">
        <div class="radio">
            <div>
                <input type="radio" name="type" id="RL" checked>
                <label for="RL">RL</label>
            </div>
            <div>
                <input type="radio" name="type" id="LR">
                <label for="LR">LR</label>
            </div>
        </div>


        <div class="contaner">
            <div class="boxmusic" id="one"
                onclick="PlayBox('music/layered-snare_A_minor.wav', 'music/bass-drum-boomy-kick_B_minor.wav')"
                style="--color:blue; --color2:red;"></div>
            <div class="boxmusic" id="tow"
                onclick="PlayBox('/music/distorted-pulse-deep-techno-kicks.wav', '/music/boomy-kick-punchy-shot_C.wav')"
                style="--color:white; --color2:rgb(32, 12, 216);"></div>
            <div class="boxmusic" id="three"
                onclick="PlayBox('/music/hard-punchy-kick-angry-shot_B_minor.wav', '/music/tekno-kick-bassy_C_minor.wav')"
                style="--color:green; --color2:rgb(255, 238, 0);"></div>
            <div class="boxmusic" id="four" onclick="PlayBox('/music/lo-fi-kick.wav', '/music/short-tekno-kick_C_major.wav')"
                style="--color:red; --color2:rgb(55, 0, 255);">
            </div>
            <div class="boxmusic" id="five"
                onclick="PlayBox('/music/buzzy-kick-one-fast-shot.wav', '/music/techno-kick-bass-recoil-hit_F_minor.wav')"
                style="--color:rgb(212, 0, 255); --color2:red;"></div>
            <div class="boxmusic" id="six" onclick="PlayBox('/music/rdo-hat_C_major.wav', '/music/techno-kick-punch.wav')"
                style="--color:orange; --color2:rgb(0, 4, 255);"></div>
            <div class="boxmusic" id="seven" onclick="PlayBox('/music/wrk-hat.wav', '/music/tekno-kick-crunch.wav')"
                style="--color:rgb(0, 255, 115); --color2:rgb(98, 0, 255);"></div>
            <div class="boxmusic" id="eight" onclick="PlayBox('/music/smooth-lo-fi-hat_A.wav', '/music/tekno-bass-kick_A.wav')"
                style="--color:rgb(255, 0, 106); --color2:rgb(255, 145, 0);"></div>
            <div class="boxmusic" id="nine" onclick="PlayBox('/music/ykz-hat_C_minor.wav', '/music/tekno-kick-aggressive.wav')"
                style="--color:rgb(187, 18, 32); --color2:rgb(55, 0, 255);"></div>
            <div class="boxmusic" id="ten"
                onclick="PlayBox('/music/pulse-hard-drums-aggressive-loop_122bpm_D_minor.wav', '/music/kick-bass-loop-uptempo.wav')"
                style="--color:rgb(0, 238, 255); --color2:rgb(255, 0, 0);"></div>
            <div class="boxmusic" id="Eleven" onclick="PlayBox('/music/flux-hi-hats_.mp3', '/music/tekno-kicks-aggressive-fa.wav')"
                style="--color:rgb(195, 0, 255); --color2:rgb(76, 0, 255);"></div>
            <div class="boxmusic" id="twelve"
                onclick="PlayBox('/music/trap-snare-roll_147bpm.wav', '/music/tekno-bass-kick_185bpm_F_minor.wav')"
                style="--color:rgb(48, 34, 110); --color2:rgb(255, 0, 0);"></div>

        </div>
    </div>

    <div class="contanerm">
        <div id="waveform"></div>
        <div class="buttons">
            <button id="play">Play</button>
            <button id="stop">Stop</button>
            <input type="file" name="file" id="file">
            <input type="range" min="0" max="1000" value="0" class="slider" id="Range">
        </div>

    </div>

    <div class="Note" dir="auto">
        <h3>ملحوظة مهمة</h3>
        <ul>
            <li>اذا كنت تريد ان تحصل على تجربة افضل قم باستخدام جهاز حاسوب</li>
            <li>اذا كنت بالفعل تستخدم جهاز حاسوب بامكانك استخدام هذه الازرار من لوحة المفاتيح: </li>
        </ul>
        <div class="instructions" dir="auto">
            <div class="ibox">T</div>
            <div class="ibox">Y</div>
            <div class="ibox">U</div>
            <div class="ibox">I</div>
            <div class="ibox">G</div>
            <div class="ibox">H</div>
            <div class="ibox">J</div>
            <div class="ibox">K</div>
            <div class="ibox">B</div>
            <div class="ibox">N</div>
            <div class="ibox">M</div>
            <div class="ibox">,</div>
        </div>

        
        <div class="btn">
            <button>حسنا</button>
        </div>
        

        <div class="never">
            <input type="checkbox" id="never">
            <label for="never">عدم العرض مره اخرى</label>
        </div>
    </div>

    `






    let one = document.getElementById('one');
    let tow = document.getElementById('tow');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    let eight = document.getElementById('eight');
    let nine = document.getElementById('nine');
    let ten = document.getElementById('ten');
    let Eleven = document.getElementById('Eleven');
    let twelve = document.getElementById('twelve');


    document.onkeydown = (event) => {
        if (event.key.toUpperCase() == 'T') {
            one.classList.add('active');
            one.click();
            setTimeout(() => {
                one.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'Y') {
            tow.classList.add('active');
            tow.click();
            setTimeout(() => {
                tow.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'U') {
            three.classList.add('active');
            three.click();
            setTimeout(() => {
                three.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'I') {
            four.classList.add('active');
            four.click();
            setTimeout(() => {
                four.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'G') {
            five.classList.add('active');
            five.click();
            setTimeout(() => {
                five.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'H') {
            six.classList.add('active');
            six.click();
            setTimeout(() => {
                six.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'J') {
            seven.classList.add('active');
            seven.click();
            setTimeout(() => {
                seven.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'K') {
            eight.classList.add('active');
            eight.click();
            setTimeout(() => {
                eight.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'B') {
            nine.classList.add('active');
            nine.click();
            setTimeout(() => {
                nine.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'N') {
            ten.classList.add('active');
            ten.click();
            setTimeout(() => {
                ten.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == 'M') {
            Eleven.classList.add('active');
            Eleven.click();
            setTimeout(() => {
                Eleven.classList.remove('active');
            }, 500);
        } else if (event.key.toUpperCase() == ',') {
            twelve.classList.add('active');
            twelve.click();
            setTimeout(() => {
                twelve.classList.remove('active');
            }, 500);
        }

    }


    let btn = document.querySelector('.btn button');
    let Note = document.querySelector('.Note');
    let never = document.getElementById('never');
    btn.onclick = () => {
        Note.style.display = 'none'
        if (never.checked) {
            localStorage.setItem('never', true)
        }
    }
    if (localStorage.getItem('never')) {
        Note.style.display = 'none';
    }

    loading();
}





function PlayBox(pathRL, pathLR) {
    let radioRL = document.getElementById('RL');
    if (radioRL.checked) {
        let audio = new Audio(pathRL);
        audio.volume = 0.5
        audio.play()
    } else {
        let audio = new Audio(pathLR);
        audio.volume = 0.5
        audio.play()
    }

}
