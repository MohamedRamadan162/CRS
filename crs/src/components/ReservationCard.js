import React from 'react'

function CustomerCard(props) {
    const formatDateString = (originalDateString) => {
        const originalDate = new Date(originalDateString);
        const formattedDate = `${originalDate.getFullYear()}-${(originalDate.getMonth() + 1).toString().padStart(2, '0')}-${originalDate.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
    };
    const remove = async () => {
        try {
            const result = await fetch(`/api/reservations/removeReservation`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rsrvID: props.rsrvID,
                    plateID: props.plateID
                }),
            });
            if (!result.ok) {
                throw new Error("Response not OK");
            }
            const data = await result.json();
            console.log(data, 1); // Log data for debugging
            if (data) {
                window.location.href = "/reservation";
            }
        } catch (error) {
            alert("Error");
            console.error("Error creating an account", error);
        }
    }
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
                        <div className='d-flex'>
                            <input
                                type="button"
                                id='search-btn'
                                value="Remove"
                                onClick={remove}
                                className="btn btn-danger btn-block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CustomerCard