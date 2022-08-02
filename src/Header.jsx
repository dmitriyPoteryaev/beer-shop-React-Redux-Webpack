import React from 'react';
import ButtonForOrder from './components/UI/ButtonForOrder/ButtonForOrder.jsx';


const Header = ({setVisiableOfModal}) => {

    
    return (
        <div className="Header">
        <div className="Logo">
        </div>
        <ButtonForOrder 
       
   setVisiableOfModal={setVisiableOfModal}
         />
      </div>
    );
};

export default Header;