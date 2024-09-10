const form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('.height').value)
    const weight=parseInt(document.querySelector('.weight').value)
    const result=document.querySelector('.result')
    if(height===' '|| height<0 || isNaN(height)){
            result.innerHTML=`please enter a Valid height ${height}`
    }
    else if(weight===' '|| weight<0 || isNaN(weight)){
        result.innerHTML=`please enter a Valid weight ${weight}`
}
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<=18.6){
            result.innerHTML=`You are Under weight ${bmi}`
        }
        else if(bmi<=24.9){
            result.innerHTML=`You are in Normal Range ${bmi}`
        }
        else{
            result.innerHTML=`You are Over weight ${bmi}`
        }
    }
})