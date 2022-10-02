import React from 'react'
import image from '../product.png'

const Item = () => {
    return (
        <div className="col-3 py-4">
            <div className="card" >
                <img src={image} class="card-img-top" />
                <div className="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Item