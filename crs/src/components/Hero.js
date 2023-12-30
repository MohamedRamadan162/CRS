import React from 'react'
import { useState, useEffect } from "react";

function Hero({setResults}) {
    const [cars, setCars] = useState("");
    // const [plate, setPlate] = useState("");
    // const search = () => {
        useEffect(() => {
            fetch(`/api/getCars`, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    setCars(data)
                }).catch((error) => console.error("Error listing cars:", error));
        }, []);

    // }
    
    console.log(cars)
    const handleChange = (e) => {
        setPlate(e.target.value)
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
                                    <strong>Rent a car</strong> is within your finger tips.
                                </h1>
                            </div>
                        </div>
                        <form className="trip-form" method='POST'>
                            <div className="row align-items-center mb-2">
                                {/* <div className="mb-3 mb-md-0 col-md-3">
                                    <select name="carModel" id="" className="custom-select form-control">
                                        <option value="">Select Model</option>
                                        <option value="">Ferrari</option>
                                        <option value="">Toyota</option>
                                        <option value="">Ford</option>
                                        <option value="">Lamborghini</option>
                                    </select>
                                </div> */}
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='plateId'
                                            onChange={handleChange}
                                            type="text"
                                            placeholder='Plate number'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                {/* <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='carYear'
                                            type="text"
                                            placeholder='Year'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='carStatus'
                                            type="text"
                                            placeholder='Car Status'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="row align-items-center">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <select name="officeID" id="" className="custom-select form-control">
                                        <option value="">Select Office</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='carPrice'
                                            type="text"
                                            placeholder='Price'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            type="date"
                                            id="cf-4"
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <input
                                        type="submit"
                                        value="Search Now"
                                        onClick={search}
                                        className="btn btn-primary btn-block py-3"
                                    />
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
