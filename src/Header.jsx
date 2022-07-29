import React from 'react';
import ButtonForOrder from './components/UI/ButtonForOrder/ButtonForOrder.jsx';


const Header = ({quality,getVisModal}) => {

    
    return (
        <div className="Header">
        <div className="Logo">
        </div>
        <ButtonForOrder 
   quality={quality}
   getVisModal={getVisModal}
         />
      </div>
    );
};

export default Header;