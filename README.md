# README

# ELearnHub

Welcome to the ELearnHub repository! This project is designed to provide a comprehensive platform for managing educational activities, including courses, assignments, and user interactions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### Authentication and User Management
- **Google Sign-In**: Users can authenticate using their Google accounts.
- **User Profile Page**: Users have dedicated profile pages to manage their information.
- **Roles**: Different roles such as student, teacher, admin, and parent are supported.

### Course Management
- **Courses and Lessons**: Create, update, and delete courses and lessons.
- **Enrollment**: Users can enroll in courses with or without access keys.
- **Different Dashboards**: Implement different dashboards for students, teachers, and administrators.

### Assignment and Grading
- **Quizzes**: Support for quizzes with various question types.
- **Assignment Submissions**: Students can submit answers to essay and file upload assignments.
- **Autograding**: Automated grading for certain types of assignments.
- **Grading Scale**: Define and apply grading scales, including custom grading scales.

### Communication
- **Messaging System**: Users can exchange messages, with notifications for new messages.
- **Meetings and Zoom Integration**: Schedule and attend meetings, integrated with Zoom.
- **Notifications**: Receive notifications for various activities within the system.

### Payment Integration
- **Payment Gateways**: Support for PayPal and Stripe payment methods.
- **Bills and Invoices**: Users receive bills via email after making a purchase.

### Reports and Analytics
- **Reports**: Create, view, and export reports for users, courses, and other relevant data.
- **Sorting and Filtering**: Ascending and descending sorting based on columns in reports and also different types of filtering.

### Additional Features
- **Resource Management**: Admins can add, delete, and manage resources.
- **Import/Export Users**: Ability to import/export users with conditional options.
- **Admin Panel**: Comprehensive admin panel for system management.
- **WYSIWYG Editor**: Rich text editor for creating assignments.


## Installation
  
To get started with the ELearnHub, follow these steps:

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/lms.git
cd lms
```
2. **Install Dependencies:**
```bash
# Use the package manager relevant to your environment (npm, yarn, etc.)
npm install
```
3. **Configure Environment Variables:**
Copy the **'.env.example'** file to **'.env'** and configure the necessary variables, including API keys for Google, PayPal, and Stripe.

4. **Database Setup:**
```bash
# Run database migrations
rails db:migrate
```

5. **Start the Application:**
```bash
# Start the server
rails server
```
Visit http://localhost:3000 in your browser to access the Learning Management System.

## Usage

1. **User Registration and Login:**
   - Users can register for an account and log in using the provided login and registration functionality.

2. **Course Enrollment:**
   - Users can browse courses and enroll in them, either with an access key or without, depending on the course settings.
   - After enrollment Users can view lessons, assignments and resources from that course.

3. **Assignments and Grading:**
   - Create assignments within courses, including quizzes. Teachers can grade assignments manually or use the autograding feature.

4. **Communication:**
   - Utilize the messaging system for communication between users. Schedule and attend meetings with integrated Zoom functionality.

5. **Payment and Billing:**
   - Make purchases within the platform, and receive bills and invoices via email.

6. **Reports and Analytics:**
   - Access and export various reports for user and course analytics.










