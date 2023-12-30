import React from 'react'

function Card(props) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
                <div className="listing-img h-100 mr-4">
                    <img src="images/car_6.jpg" alt="Image" className="img-fluid" />
                </div>
                <div className="listing-contents h-100">
                    <h3>Mitsubishi Pajero</h3>
                    <div className="rent-price">
                        <strong>$389.00</strong>
                        <span className="mx-1">/</span>day
                    </div>
                    <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                        <div className="listing-feature pr-4">
                            <span className="caption">Year:</span>
                            <span className="number">2010</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Office:</span>
                            <span className="number">Cairo</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Plate:</span>
                            <span className="number">Z345Y3</span>
                        </div>
                    </div>
                    <div>
                        <p>
                            Status: <span className='status'>Active</span>
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary btn-sm">
                                Rent Now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card