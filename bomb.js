let bombImgEl=document.getElementById("bombImg");
let heading2El=document.getElementById("heading2");
let heading5El=document.getElementById("heading5");
let inputEl=document.getElementById("input");

counter=15
let intervalId= setInterval( ()=>{
    counter -=1;
    heading2El.textContent=counter;

    if(counter===0){
        clearTimeout(intervalId);
        bombImgEl.src ="bomb-after.jpg";
        heading5El.textContent="Ohhh oh ! too late ...";
    }

},1000)


function commandBtn(){
    let inputElVal=inputEl.value;


    if(counter!==0)
        {
            if(inputElVal === "defuse"){
                clearTimeout(intervalId);
                bombImgEl.src="smileface.jpg";
                heading5El.textContent="Congratulation, you defuse the bomb..."
            }
            else{
                alert("Please try again...");
            //    heading5El.textContent="Please enter right command ...";
            }
        }
 
}
