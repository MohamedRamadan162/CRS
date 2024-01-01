import React from 'react'

function OfficeCard(props) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
                <div className="listing-contents h-100">
                    <h3>{props.OfficeLocation}</h3>
                    <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                        <div className="listing-feature pr-4">
                            <span className="caption">ID:</span>
                            <span className="number">{props.OfficeID}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Phone:</span>
                            <span className="number">{props.OfficePhone}</span>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-around'>
                            <input
                                type="button"
                                id='search-btn'
                                value="Add"
                                // onClick={search}
                                className="btn btn-primary"
                            />
                            <input
                                type="button"
                                id='search-btn'
                                value="Remove"
                                // onClick={search}
                                className="btn btn-danger"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OfficeCard