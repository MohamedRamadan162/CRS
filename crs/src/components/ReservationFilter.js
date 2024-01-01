import React from 'react'
import { useState, useEffect } from "react";
import { logging } from '../../next.config';

function ReservationFilter(props) {
    const [rsrvID, setRsrvID] = useState("");
    const [userID, setUserID] = useState("");
    const [plate, setPlate] = useState("");
    const [reserveTime, setReserveTime] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const search = () => {
        // e.preventDefault();  // Prevent the default form submission behavior
        fetch(`/api/reservations/getReservations?rsrvID=${rsrvID}&userID=${userID}&plateID=${plate}&reserveTime=${reserveTime}&pickupTime=${pickupTime}&returnTime=${returnTime}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                props.setResults(data)
            }).catch((error) => console.error("Error listing cars:", error));
    }
    const handleUserChange = (e) => {
        setUserID(e.target.value)
    }
    const handlePlateChange = (e) => {
        setPlate(e.target.value)
    }
    const handleReservationChange = (e) => {
        setRsrvID(e.target.value)
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
    return (
        <div
            className="hero"
            style={{ backgroundImage: 'url("images/hero_1_a.jpg")' }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10">
                        <div className="row mb-5">
                            <div className="col-lg-7 intro">
                                <h1>
                                    <strong>{props.emphasis}</strong> {props.h1}
                                </h1>
                            </div>
                        </div>
                        <form className="trip-form" method='get'>
                            <div className="row align-items-center mb-2">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='rsrvID'
                                            onChange={handleReservationChange}
                                            type="text"
                                            placeholder='Reservation ID'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='userID'
                                            onChange={handleUserChange}
                                            type="text"
                                            placeholder='User ID'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='plateID'
                                            onChange={handlePlateChange}
                                            type="text"
                                            placeholder='Plate number'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            type="button"
                                            id='search-btn'
                                            value="Search Now"
                                            onClick={search}
                                            className="btn btn-primary btn-block py-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-2">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <label htmlFor="reserveTime">Reservation</label>
                                        <input
                                            name='reserveTime'
                                            id='reserveTime'
                                            onChange={handleReserveTimeChange}
                                            type="date"
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <label htmlFor="pickupTime">Pickup</label>
                                        <input
                                            name='pickupTime'
                                            id='pickupTime'
                                            onChange={handlePickupTimeChange}
                                            type="date"
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <label htmlFor="returnTime">Return</label>
                                        <input
                                            name='returnTime'
                                            id='returnTime'
                                            onChange={handleReturnTimeChange}
                                            type="date"
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationFilter
