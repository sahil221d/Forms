import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EnrollmentDetails.css'; 
const EnrollmentDetails = () => {
    const { name, age, selectedBatch, enrollmentDate, paymentDetails } = useParams();

    return (
        <div className="enrollment-details-container">
            <h2 className="details-heading">Enrollment Details</h2>
            <div className="details-item">
                <strong>Name:</strong> {name}
            </div>
            <div className="details-item">
                <strong>Age:</strong> {age}
            </div>
            <div className="details-item">
                <strong>Selected Batch:</strong> {selectedBatch}
            </div>
            <div className="details-item">
                <strong>Enrollment Date:</strong> {enrollmentDate}
            </div>
            <div className="details-item">
                <strong>Payment Details:</strong> {paymentDetails}
            </div>
            
            
            <div className="go-back-button">
                <Link to="/">
                    <button>Back to Details Page</button>
                </Link>
            </div>
        </div>
    );
};

export default EnrollmentDetails;
