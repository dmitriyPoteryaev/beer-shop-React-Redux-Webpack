function  getPages(TotalCount,limit){

    const arrPages=[]

    
for(let i=1;i<=(TotalCount/limit);i++){
   

    arrPages.push(i)

}


        return arrPages
  
        
    
    }
    
    export default getPages