React-Django Enrollment Application
==============================================

Overview
--------

This application allows users to enroll in yoga classes. The backend is built using Django, providing a RESTful API for managing participant data. The frontend is developed in React, providing a user-friendly interface for form submission and displaying enrollment details.

Backend (Django)
----------------

### Project Structure

-   yoga_admission/

    -   urls.py: Main URL configuration for the Django project.
-   admission/

    -   models.py: Defines the database schema with the `Participant` model.
    -   views.py: Contains the logic for enrolling participants using Django Rest Framework.
    -   urls.py: Configures the URLs for the admission app.
    -   serializers.py: Serializes the `Participant` model for API interactions.
    -   admin.py: Registers the `Participant` model with the Django admin panel.

### Database Schema

The database schema includes the following fields in the `Participant` model:

-   `name` (CharField): Participant's name.
-   `age` (IntegerField): Participant's age.
-   `selected_batch` (CharField): Batch selected by the participant.
-   `payment_details` (CharField): Payment details provided by the participant.
-   `enrollment_date` (DateField): Date of enrollment.
-   `enrolled_date` (DateField, auto_now_add=True): Date when the participant was enrolled.

Frontend (React)
----------------

### Project Structure

-   App.js: React component defining the application's main routes using `react-router-dom`.

### Components

-   EnrollmentForm.js: React component for the enrollment form.
-   EnrollmentDetails.js: React component for displaying enrollment details.

### Styles

-   enrollmentform.css: CSS for styling the enrollment form.
-   enrollmentdetails.css: CSS for styling the enrollment details.

Usage
-----

1.  Run the Django backend server:

    `python manage.py runserver`

2.  Run the React frontend:

    `npm start`

3.  Access the application at `http://localhost:3000`.

API Endpoints
-------------

-   GET /api/enroll/: Retrieve a list of enrolled participants.
-   POST /api/enroll/: Enroll a new participant.

Note
----

-   Ensure that the Django server is running while using the React frontend.
