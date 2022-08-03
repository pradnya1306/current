import React from 'react'

function Card(props) {
    let { name, description, image } = props
    return (
        <div className='maindiv'>
            <div className='imageclass'>
                <img src={image} alt="" />
                <div className='discription'>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;