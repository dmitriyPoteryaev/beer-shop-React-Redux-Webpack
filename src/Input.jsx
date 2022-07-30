import React from 'react';

const Input = ({setfilterInput}) => {
    return (
        <div className="searchContent">
            <input type='text'
                   placeholder="Enter the name of the beer..." 
                   className="search"
                   onChange={(event)=>setfilterInput(event.target.value)}
                   />
          </div>
    );
};

export default Input;