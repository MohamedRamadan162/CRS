import React from 'react'

function Hero() {
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
                        <form className="trip-form">
                            <div className="row align-items-center mb-2">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <select name="" id="" className="custom-select form-control">
                                        <option value="">Select Model</option>
                                        <option value="">Ferrari</option>
                                        <option value="">Toyota</option>
                                        <option value="">Ford</option>
                                        <option value="">Lamborghini</option>
                                    </select>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            id="cf-3"
                                            placeholder='Plate number'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            placeholder='Year'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            placeholder='Car Status'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <select name="" id="" className="custom-select form-control">
                                        <option value="">Select Office</option>
                                        <option value="">Ferrari</option>
                                        <option value="">Toyota</option>
                                        <option value="">Ford</option>
                                        <option value="">Lamborghini</option>
                                    </select>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
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

export default Hero