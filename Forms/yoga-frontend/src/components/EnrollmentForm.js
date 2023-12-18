import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EnrollmentDetails from './EnrollmentDetails';
import './EnrollmentForm.css';

const EnrollmentForm = () => {
    const history = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: 18,
        selectedBatch: '',
        paymentDetails: '',
        enrollmentDate: '',
    });
    const [formStatus, setFormStatus] = useState(null);
    const [enrolledData, setEnrolledData] = useState([]);

    useEffect(() => {

        const fetchEnrolledData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/enroll/');
                if (!response.ok) {
                    throw new Error('Failed to fetch enrolled data');
                }
                const data = await response.json();
                setEnrolledData(data); 
            } catch (error) {
                console.error('Error fetching enrolled data:', error);
            }
        };

        fetchEnrolledData();
    }, []); 

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBatchChange = (e) => {
        setFormData({ ...formData, selectedBatch: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.age < 18 || formData.age > 65) {
                setFormStatus('Invalid age. Age must be between 18 and 65.');
                return;
            }

            const response = await fetch('http://127.0.0.1:8000/api/enroll/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    age: formData.age,
                    selected_batch: formData.selectedBatch,
                    payment_details: formData.paymentDetails,
                    enrollment_date: formData.enrollmentDate,
                }),
            });

            console.log('Response Status:', response.status);
            const data = await response.json();
            console.log('Response Data:', data);

            if (!response.ok) {
                setFormStatus('Enrollment failed. Please try again.');
                return;
            }

            setFormStatus('Form submitted successfully!');
            // Clear form data
            setFormData({
                name: '',
                age: 18,
                selectedBatch: '',
                paymentDetails: '',
                enrollmentDate: '',
            });

          
            setEnrolledData([...enrolledData, formData]);

      
            history(`/EnrollmentDetails/${formData.name}/${formData.age}/${formData.selectedBatch}/${formData.enrollmentDate}/${formData.paymentDetails}`);
        } catch (error) {
            console.error('Error during enrollment:', error);
            setFormStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="enrollment-form-container">
            <h2>Yoga Class Enrollment Form</h2>
            <form onSubmit={handleSubmit} className="enrollment-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        min="18"
                        max="65"
                        required
                    />
                </label>
                <br />
                <label>
                    Select Batch:
                    <select
                        name="selectedBatch"
                        value={formData.selectedBatch}
                        onChange={handleBatchChange}
                        required
                    >
                        <option value="">-- Select Batch --</option>
                        <option value="6-7AM">6-7AM</option>
                        <option value="7-8AM">7-8AM</option>
                        <option value="8-9AM">8-9AM</option>
                        <option value="5-6PM">5-6PM</option>
                    </select>
                </label>
                <label>
                    Enrollment Date:
                    <input
                        type="date"
                        name="enrollmentDate"
                        value={formData.enrollmentDate}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Payment Details:
                    <input
                        type="text"
                        name="paymentDetails"
                        value={formData.paymentDetails}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <br />
               
                <button type="submit" disabled={formStatus !== null}>
                    Enroll
                </button>
            </form>
            {formStatus && <div className="form-status">{formStatus}</div>}

          
            {enrolledData.length > 0 && (
                <div>
                    <h2>Enrolled People</h2>
                    <table className="enrolled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Batch</th>
                                <th>Enrollment Date</th>
                                <th>Payment Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledData.map((enrollment, index) => (
                                <tr key={index}>
                                    <td>{enrollment.name}</td>
                                    <td>{enrollment.age}</td>
                                    <td>{enrollment.selected_batch}</td>
                                    <td>{enrollment.enrollment_date}</td>
                                    <td>{enrollment.payment_details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EnrollmentForm;
