import React from 'react'

import './Collection-item.scss'
import CustomButton from '../custom-button/custom-button'


const CollectionItem = ({  name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image"
         style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >
           
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
) 

export default CollectionItem