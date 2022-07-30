import React from 'react';
import Filter from './components/UI/Filter/Filter.jsx'


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