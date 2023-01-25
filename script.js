var hiddenEle= document.getElementById("hid")
let textInput = document.getElementById("pass")

function f1(){
    hiddenEle.style.visibility="hidden"
    // let textInput = document.getElementById("pass")
    //console.log(textInput.value)
    num=textInput.value
    if(0<num&&num<=50){

        //console.log(x)
        count= 1

        let a1list = document.querySelectorAll(".a1")

        for (let i = 0; i < a1list.length; i++){
            // console.log(i+1)
            //console.log(a1list[i])
            if(count<= num){
                a1list[i].innerText= count
                count ++
            }
            else{
                a1list[i].innerText= ""
            }
            
        }
        

        let w1list = document.querySelectorAll(".w1")

        for (let j = 0; j < w1list.length; j++){
            if(count <= num){
                w1list[j].innerText= count
                count++
            }
            else{
                w1list[j].innerText=""
            }
            
        }

        let m1list = document.querySelectorAll(".m1")

        for (let a = 0; a < m1list.length; a++){
            //console.log(a+1)
            if(count <= num){
                m1list[a].innerText= count
                count++
            }
            else{
                m1list[a].innerText=""
            }
            
            
        }
}
else{
    num=textInput.value
    let tds = document.getElementsByTagName("td")
    for (const iterator of tds) {
        iterator.innerText=""
    }
    if(isNaN(num)){
        hiddenEle.innerText="Please enter a number"
        
    }
    else if(num>0){
        hiddenEle.innerText="Max Passengers Number is 50"
        
    }
    else if(num<=0){
        hiddenEle.innerText="You have entered an invalid number"
        
    }
    hiddenEle.style.visibility="visible"
    
}
}
let submitButton = document.getElementById("sub")
submitButton.onclick= f1

