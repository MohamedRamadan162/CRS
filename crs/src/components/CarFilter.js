import React from 'react'
import { useState, useEffect } from "react";

function CarFilter(props) {
    const [plate, setPlate] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState("");
    const [office, setOffice] = useState("");
    const [price, setPrice] = useState("");
    const search = () => {
        // e.preventDefault();  // Prevent the default form submission behavior
        fetch(`/api/cars/getCars?carModel=${model}&plateID=${plate}&carYear=${year}&carStatus=${status}&carOffice=${office}&carPrice=${price}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                props.setResults(data)
                console.log('cars-hero:', data)
            }).catch((error) => console.error("Error listing cars:", error));
    }
    const handlePlateChange = (e) => {
        setPlate(e.target.value)
    }
    const handleModelChange = (e) => {
        setModel(e.target.value)
    }
    const handleYearChange = (e) => {
        setYear(e.target.value)
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handleOfficeChange = (e) => {
        setOffice(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
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
                                    <select
                                        name="carModel"
                                        id=""
                                        onChange={handleModelChange}
                                        className="custom-select form-control"
                                    >
                                        <option value="">Select Model</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Honda">Honda</option>
                                        <option value="">Lamborghini</option>
                                    </select>
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
                                            name='carYear'
                                            onChange={handleYearChange}
                                            type="text"
                                            placeholder='Year'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                    <select
                                        name="carStatus"
                                        id=""
                                        onChange={handleStatusChange}
                                        className="custom-select form-control"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="active">active</option>
                                        <option value="rented">rented</option>
                                        <option value="out of service">out of service</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <select
                                        name="officeID"
                                        onChange={handleOfficeChange}
                                        id=""
                                        className="custom-select form-control"
                                    >
                                        <option value="">Select Office</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='carPrice'
                                            onChange={handlePriceChange}
                                            type="text"
                                            placeholder='Price'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <input
                                        type="button"
                                        id='search-btn'
                                        value="Search Now"
                                        onClick={search}
                                        className="btn btn-primary btn-block py-3"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarFilter
