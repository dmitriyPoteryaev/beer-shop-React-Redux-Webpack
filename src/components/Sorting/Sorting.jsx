import React from 'react';
import Filter from '../UI/Filter/Filter'


const Sorting = ({filterSelector,setfilterSelector}) => {

   
    
 


    return (
        
        <Filter
        filterSelector={filterSelector}
        setfilterSelector={setfilterSelector}
          defaultName="Sort by:"
          options={[
            { name: "abv", value: "abv" }
          ]}
        />
    
    );
};

export default Sorting;