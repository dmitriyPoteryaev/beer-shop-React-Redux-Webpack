


function  CheckDesc(desc,amount){

if(desc.split('').length>amount)
{
return  [...desc.split('').filter((elem,i)=> i<=amount).join(''),'...']
}
else{

    return desc.split('').join('')
}
    

}

export default CheckDesc