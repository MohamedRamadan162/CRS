import React from 'react'
import { useState, useEffect } from "react";

function OfficeFilter(props) {
    const [officeID, setOfficeID] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const search = () => {
        // e.preventDefault();  // Prevent the default form submission behavior
        fetch(`/api/offices/getOffices?officeID=${officeID}&officeLocation=${location}&officePhone=${phone}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                props.setResults(data)
                console.log('cars-hero:', data)
            }).catch((error) => console.error("Error listing cars:", error));
    }
    const handleOfficeChange = (e) => {
        setOfficeID(e.target.value)
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
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
                                    <input
                                        name='officeID'
                                        onChange={handleOfficeChange}
                                        type="text"
                                        placeholder='Office ID'
                                        className="form-control px-3"
                                    />
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='officeLocation'
                                            onChange={handleLocationChange}
                                            type="text"
                                            placeholder='Location'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='officePhone'
                                            onChange={handlePhoneChange}
                                            type="text"
                                            placeholder='Phone'
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfficeFilter
