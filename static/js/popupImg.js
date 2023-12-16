const images = document.getElementsByClassName('container');

const view = false;

for(let ind=0; ind < images.length; ind++){
    const el = images[ind];
    el.addEventListener('click', function (e){
        if('popImgActive' in el.classList){
            el.classList.add('popImgActive');
        } else {
            el.classList.remove('popImgActive');
        }
    })
}

