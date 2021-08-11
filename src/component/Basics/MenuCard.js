import React from 'react';

function MenuCard({ menuData }) {
    return (
        <>
        <section className="main-card--cointainer" >
        { menuData.map( (currEle) => {
            const { id, image, name, category, price, description } = currEle;
            return (
                <>
                <div className= 'card-container' key={ id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{ id }</span>
                            <span className='card-number card-author subtle'>{ category}</span>
                            <h2 className='card-title'>{ name }</h2>
                            <span className='card-description subtle'>{ description }</span>
                            <div className='card-read subtle'>Read</div>
                        </div>
                        <img src={ image } alt="images" className='card-media'/>
                        <span className='card-tag' ><b>Order Now { price }</b></span>
                    </div>
                </div>
                </>
            )
        } ) }
        </section>
        </>
    )
}

export default MenuCard
