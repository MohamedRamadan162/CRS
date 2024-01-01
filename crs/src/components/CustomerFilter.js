import React from 'react'
import { useState, useEffect } from "react";
import { logging } from '../../next.config';

function CustomerFilter(props) {
    const [userID, setUserID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const search = () => {
        // e.preventDefault();  // Prevent the default form submission behavior
        fetch(`/api/users/getUsers?userID=${userID}&userName=${name}&userEmail=${email}&userPhone=${phone}`, {
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
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
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
                                            name='userName'
                                            onChange={handleNameChange}
                                            type="text"
                                            placeholder='Name'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='userEmail'
                                            onChange={handleEmailChange}
                                            type="text"
                                            placeholder='Email'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 mb-md-0 col-md-3">
                                    <div className="form-control-wrap">
                                        <input
                                            name='userPhone'
                                            onChange={handlePhoneChange}
                                            type="text"
                                            placeholder='Phone'
                                            className="form-control px-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-2">
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

export default CustomerFilter
