import React from 'react';
import './card.css';
export default class Card extends React.Component{
    render() {
        let {name,description,location,id,price,path} = this.props;
        console.log(path)
        return (
            <div className="d-flex p-3" key={id}>
                 <img src={path}
                    alt='profile_image' width={200} height={200} style={{ borderRadius: '10px' }} />
                <div className="ms-4">
                     <div className="title">{name}</div>
                     <div className="text">{description}</div>
                     <div className='text'>{price ? location : `Famous places: ${location}`}</div>
                    <div className="text"><b>{price}</b></div>
                 </div>
            </div>
        )
    }
}