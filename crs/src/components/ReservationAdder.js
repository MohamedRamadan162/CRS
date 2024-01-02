import React from 'react'
import { useState, useEffect } from "react";

function ReservationAdder(props) {
    // const [userID,setUserID] = useState('')
    const [reserveTime, setReserveTime] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [payment, setPayment] = useState("");
    console.log('id: ',props.userID);
    const add = async () => {
        try {
            const result = await fetch(`/api/reservations/makeReservation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: props.userID,
                    plateID: props.plateID,
                    reserveTime: reserveTime,
                    pickupTime: pickupTime,
                    returnTime: returnTime,
                    payment: payment
                }),
            });

            if (!result.ok) {
                throw new Error("Response not OK");
            }

            const data = await result.json();
            console.log(data, 1); // Log data for debugging

            if (data) {
                if(props.userID == 1){
                    window.location.href = "/";
                }
                else{
                    window.location.href = "/customers";
                }
                
            }
        } catch (error) {
            alert("Error");
            console.error("Error creating an account", error);
        }
    }

    const handleReserveTimeChange = (e) => {
        setReserveTime(e.target.value)
    }
    const handlePickupTimeChange = (e) => {
        setPickupTime(e.target.value)
    }
    const handleReturnTimeChange = (e) => {
        setReturnTime(e.target.value)
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    return (
        <div
            className="hero"
            style={{ backgroundImage: 'url("images/hero_1_a.jpg")' }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10">
                        <form className="trip-form" method='post' style={{ marginTop: '100px' }}>
                            <div className="form-control-wrap mb-3">
                                <label htmlFor="reserveTime">Reservation</label>
                                <input
                                    name='reserveTime'
                                    id='reserveTime'
                                    onChange={handleReserveTimeChange}
                                    type="date"
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <label htmlFor="pickupTime">Pickup</label>
                                <input
                                    name='pickupTime'
                                    id='pickupTime'
                                    onChange={handlePickupTimeChange}
                                    type="date"
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <label htmlFor="returnTime">Return</label>
                                <input
                                    name='returnTime'
                                    id='returnTime'
                                    onChange={handleReturnTimeChange}
                                    type="date"
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <select
                                    name="payment"
                                    onChange={handlePaymentChange}
                                    id=""
                                    className="custom-select form-control"
                                >
                                    <option value="">Select Payment method</option>
                                    <option value="cash">cash</option>
                                    <option value="credit card">credit card</option>
                                </select>
                            </div>
                            <div className="form-control-wrap">
                                <input
                                    type="button"
                                    id='search-btn'
                                    value="Add"
                                    onClick={add}
                                    className="btn btn-primary btn-block py-3"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReservationAdder
