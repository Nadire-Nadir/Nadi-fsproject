function clickButton(event) {
    let header = document.getElementById("header");
    for(let i=0; i<6; i++){
        let letters="0123456789ABCDEF"
        let temp = Math.floor(Math.random()*16);
        color = color + letters[temp];
 
    }
    header.style.color=color;
    console.log(color);
 
    
 }
 
 