import React from 'react'

function CardContainer(props) {
    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row mp-5">
                    <div className="col-lg-7">
                        <h2 className="section-heading mb-5">
                            <strong>Car Listings</strong>
                        </h2>
                        {/* <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                    </div>
                </div>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CardContainer