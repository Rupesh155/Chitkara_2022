const inputE=document.querySelector('input')
const buttonE=document.querySelectorAll('button')
for(let button of buttonE){
       button.addEventListener('click',function(e){
        const text= e.target.innerText
        if(text==='C'){
            inputE.value=''
        }
        else if(text==='='){
            try{
                inputE.value=eval(inputE.value)
            }
            catch{
                console.log('Invalid')
            }
        }

        else if(text==='back'){
            inputE.value=inputE.value.slice(0,-1)
        }
        else{
            inputE.value+=text
        }
        // console.log(text)

       })
}