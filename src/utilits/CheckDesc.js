


function  CheckDesc(desc){

if(desc.split('').length>140)
{
return  [...desc.split('').filter((elem,i)=> i<=140).join(''),'...']
}
else{

    return desc.split('').join('')
}
    

}

export default CheckDesc