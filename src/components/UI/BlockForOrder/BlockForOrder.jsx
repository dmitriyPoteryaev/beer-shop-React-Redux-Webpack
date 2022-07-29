import React from 'react';
import classes from './BlockForOrder.module.css';
import trash from '../../../assets/trash.png';
import blacktrash from '../../../assets/blacktrash.png';

const BlockForOrder = (props) => {

    
    return (
        <div className={classes.blockForContent}>
        <p className={classes.TitleOfThing}> {props.value.name}</p>
        <img src={props.value.image_url} 
         className={classes.content_picture}
           alt={'PictureOfSomethinContent'}/>
        <p className={classes.abv}>{props.value.abv} %</p>
        <img
         src={trash} 
          className={classes.img_trash} 
           alt={'PictureForTrash'}
            onClick={()=>props.remove(props.value)}
            onMouseOver={(event)=>(event.currentTarget.src = blacktrash)}
            onMouseOut={(event)=>(event.currentTarget.src = trash)}/>
    </div>
    );
};

export default BlockForOrder;