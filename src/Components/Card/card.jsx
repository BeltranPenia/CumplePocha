import React from 'react'
import './card.css'
import skull from '../../assets/icons/skull.png'
import cauldron from '../../assets/icons/cauldron.png';
import pumpkin from '../../assets/icons/pumpkin.png';
import candy from '../../assets/icons/candy.png';

const Card = ({icon, title, desc, button, label, url}) => {

    if(icon === 'skull'){
        icon = skull;
    }else if(icon === 'pumpkin'){
        icon = pumpkin;
    }else if(icon === 'cauldron'){
        icon = cauldron;
    }
    else{
        icon = candy;
    }


    return (
    <div className='card'>
        <div className='title'>
            <img src={icon} alt='icon' width='48' height='48'/>
            <h2>{title}</h2>
        </div>
        
        <p>{desc}</p>
  
        {button === true && <button type='button' className='button'><a href={url} target='_blank'>{label}</a></button>}

    </div>
  )
}

export default Card