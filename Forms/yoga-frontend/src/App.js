import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnrollmentForm from './components/EnrollmentForm';
import EnrollmentDetails from './components/EnrollmentDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EnrollmentForm />} />
                <Route path="/EnrollmentDetails/:name/:age/:selectedBatch/:enrollmentDate/:paymentDetails" element={<EnrollmentDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
