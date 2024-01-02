import React, { useState } from 'react'
import { useRouter } from 'next/router';

function CarCardc(props) {

    const router = useRouter();
    const handleRentClick = () => {
        router.push({
            pathname: '/customer_rent', // Path to the destination page
            query: { plateID: props.plateID }, // Passing data as a query parameter
        });
    };
    const handleDeactiveClick = async () => {
        try {
            const result = await fetch(`/api/cars/updateCarStatus`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    carStatus: 'out of service',
                    plateID: props.plateID
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
    const handleActiveClick = async () => {
        try {
            const result = await fetch(`/api/cars/updateCarStatus`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    carStatus: 'active',
                    plateID: props.plateID
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
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="listing d-block  align-items-stretch">
                <div className="listing-img mr-4">
                    <img src={props.carPic} alt="Car Image" className="" />
                </div>
                <div className="listing-contents h-100">
                    <h3>{props.carModel}</h3>
                    <div className="rent-price">
                        <strong>{props.carPrice}$</strong>
                        <span className="mx-1">/</span>day
                    </div>
                    <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                        <div className="listing-feature pr-4">
                            <span className="caption">Year:</span>
                            <span className="number">{props.carYear}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Office:</span>
                            <span className="number">{props.officeName}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Plate:</span>
                            <span className="number">{props.plateID}</span>
                        </div>
                    </div>
                    <div>
                        <p>
                            Status: <span className='status'>{props.carStatus}</span>
                        </p>
                        <p className='d-flex'>
                            <button onClick={handleRentClick} className='btn btn-primary btn-sm'>
                                Rent Now
                            </button>
                            {/* <div className='d-flex flex-column'>
                                <button onClick={handleDeactiveClick} className='btn btn-danger btn-sm'>
                                    Deactivate
                                </button>
                                <button onClick={handleActiveClick} className='btn btn-success btn-sm'>
                                    Activate
                                </button>
                            </div> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CarCardc