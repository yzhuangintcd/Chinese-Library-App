# National Library of China - Mobile Application

A comprehensive mobile library application built with React, featuring bilingual support (Chinese/English), user registration, book borrowing, and accessibility features.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor 
- Git 

## Getting Started

### Step 1: Make sure you are in the project directory
if not cd into Chinese-Library-App in your terminal
```bash
cd Chinese-Library-App
```

### Step 2: Install Required Dependencies

Install the necessary packages:

```bash
# Install Lucide React for icons
npm install 
```

### Step 3: Make sure `src/AppMain.js` looks like:

```javascript
// Router page

import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import {
  StartupPage,
  RegisterPage,
  LoginPage,
  DashboardPage,
  BookingsPage,
  BorrowBookPage,
  BookSpacePage,
  PaymentPage,
  BottomNav,
} from "./pages";

```

### Step 4: Run the Application

Start the development server:

```bash
npm start
```

The application should automatically open in your browser at `http://localhost:3000`

## For your own testing

### Testing Registration Flow:

1. Click **"Register"** on the startup page
2. Select a user type:
   - **Adult Chinese**: Enter ID number (any format) and phone
   - **Child**: Enter guardian ID and phone
   - **Foreign**: Enter nationality, passport, visa info, and phone
3. Set a password or enable OTP
4. Accept terms and conditions
5. Click **"Register"**
6. Note your generated account number
* Note: you can just use random characters here, we don't have a database to actually check anything 

### Testing Login Flow:

1. Click **"Log In"** on the startup page
2. Enter your account number (or use any format like "LIB12345")
3. Click **"Log In"**

### Testing Book Borrowing:

1. Navigate to **"Bookings"** tab (bottom navigation)
2. Click **"Borrow a Book"**
3. Browse popular books or search for specific titles
4. Click on a book to expand details
5. Click **"Loan"** for available books or **"Order In"** for unavailable ones

### Testing Features:

- **Language Switch**: Click globe icon on startup page
- **Elderly Mode**: Profile menu → Toggle "Elderly Friendly Mode"
- **Recent Activities**: Tracked automatically as you navigate
- **Sign Out**: Profile menu → "Sign Out"

## Project Structure

```
library-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── pages/
│   ├── BookSpacePage.js  # Book a study space - Cora
|   ├── ... 
|   ├── StartupPage.js    # Welcome page - Paddy
├── src/  
|   ├── asset/            # Logo 
│   ├── AppMain.js        # Main application component
|   ├── App.js            # Old Main application component, Ingore 
│   ├── AppMain.js        # Main application component
|   ├── App.js            # Old Main application component, Ingore this please
│   ├── index.js          # Entry point
│   ├── App.css           # styles
│   └── ...
├── package.json
└── README.md
```

## Features Implemented

### Pages (Completed):
- **Startup Page** - Logo, language selector, login/register buttons
- **Register Page** - Multi-type registration with validation
- **Login Page** - Account number and biometric login options
- **Dashboard** - Events, recent activities, library info
- **Borrow Book Page** - Search, filters, loan/order functionality

### Template Pages:
- **Booking Study Space** - Button available in Bookings tab
- **Payments** - Template page with navigation


## Troubleshooting

### Issue: "Module not found: Can't resolve '{specfic_package_name}'"
**Solution**: Run `npm install {specfic_package_name}`

### Issue: App won't start
**Solution**: 
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm start`

### Issue: Port 3000 already in use
**Solution**: 
- Kill the process using port 3000, or
- Start on a different port: `PORT=3001 npm start`

## Notes

- This is a **frontend-only** application (no backend)
- All data is stored in component state (resets on refresh)
- Account numbers are randomly generated
- Book data is hardcoded

## Next Steps
1. Add **Borrow Book Event** Page
2. 


## 📄 License

This project is created for educational purposes. 
Made for CSU44051 Human Factors 
Group 20, 
Members:
- Peng 
- Emma
- Cora
- Paddy

---

**Happy Coding! 🎉**