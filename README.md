## Build a basic version of PayTM

This project is a **Build a basic version of PayTM** built with a **React.js frontend** and a **Node.js backend**. The backend uses **MongoDb** as the database. The app enables users to manage online payment-related tasks such as user sign-up, sign-in, balance checks, money transfers, and user updates.

## Technologies Used

### Frontend
- ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)  
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  
- ![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-000000?style=for-the-badge&logo=jsonwebtoken&logoColor=white)

  
## Features

### Backend
- **Configuration**:
  - `config/db.js`: Database connection configuration for MySQL.
- **Controllers**:
  - `get_balance.js`: Fetches user account balance.
  - `get_users.js`: Retrieves user data.
  - `sign_in.js`: Handles user sign-in functionality.
  - `sign_up.js`: Manages user registration.
  - `transfer.js`: Handles money transfers between accounts.
  - `user_update.js`: Updates user information.
- **Functions**:
  - `accountTransfer.js`: Core logic for transferring money between accounts.
- **Middleware**:
  - `userLoginCheck.js`: Verifies user authentication for protected routes.
- **Routes**:
  - `account.js`: Routes related to account operations.
  - `userRoutes.js`: Routes related to user operations.
- **Entry Point**:
  - `index.js`: Main entry point for the backend.

### Frontend
- **Components**:
  - `Appbar.jsx`: Navigation bar for the app.
  - `Balance.jsx`: Displays the user's balance.
  - `BottomWarning.jsx`: Component for warning messages.
  - `Button.jsx`: Customizable button component.
  - `Heading.jsx`: Main heading text component.
  - `InputBox.jsx`: User input field.
  - `SendMoney.jsx`: UI for sending money.
  - `SubHeading.jsx`: Secondary heading text component.
  - `Users.jsx`: Displays user data.
- **Pages**:
  - `Dashboard.jsx`: User dashboard page.
  - `SendMoney.jsx`: Page for sending money.
  - `Signin.jsx`: Sign-in page.
  - `Signup.jsx`: Registration page.
- **Styles**:
  - `App.css` and `index.css`: Styling for the app.
- **Entry Point**:
  - `main.jsx`: Entry point for the React application.



### Tools and Configurations
- ESLint for code quality.
- PostCSS for processing CSS.

