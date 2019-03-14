let tabs = document.querySelectorAll('.info-box li a');
let panels = document.querySelectorAll('.info-box article');

for(let i=0;i<tabs.length;i++){
    tab = tabs[i];
    setTabHandler(tab,i);
}

function setTabHandler(tab,tabPos) {
    tab.onclick = function () {
        for (let i = 0; i < tabs.length; i++) {
            if(tabs[i].getAttribute('class')){
                 tabs[i].removeAttribute('class');
             }
           /*tabs[i].className = ''*/
        }
        tab.setAttribute('class','active');
        /*tab.className = 'active';*/
        for (let i=0;i<panels.length;i++){
            panels[i].className = '';
        }
        panels[tabPos].className = 'active-panel';
    }
}
