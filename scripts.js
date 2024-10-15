let count =0;
let count2=2;
function luffy(n){
    count += count2;
    console.log(`your count is ${count}`);  
    console.log(n)

}
luffy('ichigo')
function changebutton(){
    if (document.getElementById('subID').innerText === 'Subscribe'){
        document.getElementById('subID').innerText='Subscribed';
        document.querySelector('.SUBbutton').classList.remove("SUBbutton")
        document.querySelector('.SUBbutton').classList.add("SUBjs")

    }
    else{
        document.getElementById('subID').innerText='Subscribe';
        document.querySelector('.SUBjs').classList.add("SUBbutton")

    }
    
}