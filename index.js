let no = document.querySelector("#no");
let sad1 = document.querySelector('.sad1');

let imgNum = 0;

const procc = ()=>{
    let randY = Math.floor(Math.random() * 125);
    let randX = Math.floor(Math.random() * 100);
    no.style.position="fixed";
    no.style.left=`${randX}%`;
    no.style.top=`${randY}%`;

    sad1.style.opacity="1";
    if(imgNum === 3){
        sad1.src=`./assets/sad3.gif`;
    }else if(imgNum !== 3){
        sad1.src=`./assets/sad${imgNum+1}.gif`;
        imgNum++;
    }
}




if(window.matchMedia("(max-width: 800px)")){
    no.addEventListener("click",()=>{
        procc();
    });
}else{
    no.addEventListener("mouseover",()=>{
        procc();
    });
}
