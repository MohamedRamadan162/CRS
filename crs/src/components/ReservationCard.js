import React from 'react'

function CustomerCard(props) {
    const formatDateString = (originalDateString) => {
        const originalDate = new Date(originalDateString);
        const formattedDate = `${originalDate.getFullYear()}-${(originalDate.getMonth() + 1).toString().padStart(2, '0')}-${originalDate.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
      };
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
                <div className="listing-contents h-100">
                    <h3>Reservation ID: {props.rsrvID}</h3>
                    <div className="d-block d-md-flex">
                        <div className="listing-feature pr-4">
                            <span className="caption">User ID:</span>
                            <span className="number">{props.userID}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Plate:</span>
                            <span className="number">{props.plateID}</span>
                        </div>
                    </div>
                    <div className="d-block d-md-flex">
                        <div className="listing-feature pr-4">
                            <span className="caption">Reservation time:</span>
                            <span className="number">{formatDateString(props.reserveTime)}</span>
                        </div>
                    </div>
                    <div className="d-block d-md-flex">
                        <div className="listing-feature pr-4">
                            <span className="caption">Pickup time:</span>
                            <span className="number">{formatDateString(props.pickupTime)}</span>
                        </div>
                    </div>
                    <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                        <div className="listing-feature pr-4">
                            <span className="caption">Return time:</span>
                            <span className="number">{formatDateString(props.returnTime)}</span>
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

export default CustomerCard