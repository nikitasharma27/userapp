
#Introduction
This doc will walk you through the development process of a simple React user form that collects name, email, and password from users. Additionally, it demonstrates how to fetch user data using Axios from a mock API.

#Prerequisites
Before you begin, ensure that you have the following prerequisites in place:

Basic knowledge of React
Familiarity with npm or yarn package managers

#Installation
Follow these steps to set up the project and install the required dependencies:

Create a new React project using create-react-app or your preferred method.
Navigate to the project directory in your terminal.
Install Axios by running npm install axios or yarn add axios.

#Component Structure
The User Form application consists of the following components:

UserForm: Renders the user form and handles form submission.
UserList: Displays the list of users fetched from the mock API.

#UserForm Component
The UserForm component is responsible for rendering the user form and submitting user data. It contains the following features:

Input fields for name, email, and password.
Form submission handling.

#UserList Component
Integration with Axios to send a POST request to the mock API.
