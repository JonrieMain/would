let no = document.querySelector("#no");



no.addEventListener("mouseover",()=>{
    let randY = Math.floor(Math.random() * 125);
    let randX = Math.floor(Math.random() * 100);
    no.style.position="fixed";
    no.style.left=`${randX}%`;
    no.style.top=`${randY}%`;


});
no.addEventListener("click",()=>{
    let randY = Math.floor(Math.random() * 125);
    let randX = Math.floor(Math.random() * 100);
    no.style.position="fixed";
    no.style.left=`${randX}%`;
    no.style.top=`${randY}%`;


});