import React from 'react';
import Filter from './components/UI/Filter/Filter.jsx'


const Sorting = ({filterSelector,setfilterSelector}) => {

   
    
 


    return (
        
        <Filter
        filterSelector={filterSelector}
        setfilterSelector={setfilterSelector}
          defaultName="Сортировка по:"
          options={[
            { name: "По крепости", value: "abv" }
          ]}
        />
    
    );
};

export default Sorting;