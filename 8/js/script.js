window.addEventListener('DOMContentLoaded',function(){
let infoHeader = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document. querySelectorAll('.info-tabcontent');

    function hideContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContent(1);

function showContent(b){
    if(tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show'); 
    }
}
infoHeader.addEventListener('click', function(event){
let target = event.target;
if(target && target.classList.contains('info-header-tab')){
    for(let i = 0; i < tab.length; i++){
        if(target == tab[i]){
            hideContent(0);
            showContent(i);
            break;
        }
    }
}
});
});