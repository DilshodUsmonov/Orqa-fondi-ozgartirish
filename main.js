const elbtn=document.querySelector('.btn');
const elcontainer=document.querySelector('.container');
let uzgar=0;
elbtn.addEventListener('click', (evt)=> {
    const random1= (Math.random()*256).toFixed();
    const random2= (Math.random()*256).toFixed();
    const random3= (Math.random()*256).toFixed();
    const random4= (Math.random() ).toFixed(1);
    elcontainer.style.backgroundColor = "rgba("+[random1, random2, random3, random4].join(',') +")";
    
 
})