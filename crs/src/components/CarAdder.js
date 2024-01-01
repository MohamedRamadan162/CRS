import React from 'react'
import { useState, useEffect } from "react";

function CarAdder(props) {
    const [plate, setPlate] = useState("");
    const [pic, setPic] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState("");
    const [office, setOffice] = useState("");
    const [price, setPrice] = useState("");
    const add = async () => {
        try {
            const result = await fetch(`/api/cars/addCar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    plateID:plate,
                    carModel:model,
                    carPic:pic,
                    carYear:year,
                    carStatus:status,
                    officeID:office,
                    carPrice:price

                }),
            });

            if (!result.ok) {
                throw new Error("Response not OK");
            }

            const data = await result.json();
            console.log(data, 1); // Log data for debugging

            if (data) {
                window.location.href = "/";
            }
        } catch (error) {
            alert("Error");
            console.error("Error creating an account", error);
        }
    }

    const handlePlateChange = (e) => {
        setPlate(e.target.value)
    }
    const handleModelChange = (e) => {
        setModel(e.target.value)
    }
    const handlePicChange = (e) => {
        setPic(e.target.value)
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
                        {/* <div className="row mb-5">
                            <div className="col-lg-7 intro">
                                <h1>
                                    <strong>{props.emphasis}</strong> {props.h1}
                                </h1>
                            </div>
                        </div> */}
                        <form className="trip-form" method='post' style={{marginTop:'100px'}}>
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='plateID'
                                    onChange={handlePlateChange}
                                    type="text"
                                    placeholder='Plate number'
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='carModel'
                                    onChange={handleModelChange}
                                    type="text"
                                    placeholder='Car model'
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='carPic'
                                    onChange={handlePicChange}
                                    type="text"
                                    placeholder='Picture'
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='carYear'
                                    onChange={handleYearChange}
                                    type="text"
                                    placeholder='Year'
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
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
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='officeID'
                                    onChange={handleOfficeChange}
                                    type="text"
                                    placeholder='Office ID'
                                    className="form-control px-3"
                                />
                            </div>
                            <div className="form-control-wrap mb-3">
                                <input
                                    name='carPrice'
                                    onChange={handlePriceChange}
                                    type="text"
                                    placeholder='Car Price'
                                    className="form-control px-3"
                                />
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

export default CarAdder
