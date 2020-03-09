window.addEventListener('DOMContentLoaded', () => {
    let infoHeader = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    
    hideContent(1);

    let showContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
    infoHeader.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    let deadline = '2020-03-23';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)));
        let days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let days = timer.querySelector('.days');
        // let timeInterval = setInterval(updateClock, 1000);

        let updateClock = () => {
            let t = getTimeRemaining(endtime);

            let addZero = (num) => {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            days.textContent = addZero(t.days);


            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                days.textContent = '00';
            }
        };
        let timeInterval = setInterval(updateClock, 1000);

    };
    setClock('timer', deadline);

    //Modal window

    let moreBTN = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let closeBTN = document.querySelector('.popup-close');

    moreBTN.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    closeBTN.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBTN = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descriptionBTN.length; i++) {
        descriptionBTN[i].addEventListener('click', () => {
            overlay.style.display = 'block';
        });
    }

    class Options {
        constructor(height, width, bg, fontSize, textAlign, marginLeft, marginRight) {
            this.heigth = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.marginLeft = marginLeft;
            this.marginRight = marginRight;

        }
        create() {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<h1>Hello World!</h1>";
            document.body.querySelector('.main').appendChild(newDiv);
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}; margin-left:${this.marginLeft};margin-right:${this.marginRight}`;
            newDiv.style.cssText = param;
        }
    }

    let options = new Options(250, 250, 'red', 15, 'center', 'auto', 'auto');
    options.create();

     // Form

     let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('#form'),
        contactInput =  contactForm.getElementsByTagName('input');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }
    });

});
