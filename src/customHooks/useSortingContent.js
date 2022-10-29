

export const useSortingContent=(somethingContent,filterSelector,filterInput)=>
            [...somethingContent].sort(
            (a, b) => b[filterSelector] - a[filterSelector]
          ).filter((elem)=> elem.name.toLowerCase().includes(filterInput.toLowerCase()))
        
   
  