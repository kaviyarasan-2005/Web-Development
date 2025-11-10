function df(){
    var a =10;
    console.log(a);
    alert("button clicked");

}
   let clo = ['red','yellow','green'];
    let index = 0;
function changecolor(){
 index = index+1;
 document.getElementById("btt").style.color=clo[index%3];
 document.getElementById("btt").textContent="name";
}
