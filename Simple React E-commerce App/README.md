# Project Name: Simple React E-commerce App

# Live Link




Software Requirements Specification (SRS)

 Technologies: React (Context API, React Router, Hooks)

1. Introduction
1.1 Purpose
This document outlines the functional and non-functional requirements of a React-based E-commerce web application that includes:
A homepage displaying a list of products


A product details page


An about page


Cart functionality using Context API (add/remove items)


1.2 Scope
The scope includes:
Design frontend pages (no backend/database)


Local state management via React Context API


No payment or user authentication


Responsive design and simple navigation



2. Overall Description
2.1 Product Perspective
This is a self-contained frontend application that runs in the browser and demonstrates e-commerce-like functionality with in-memory cart management.
2.2 User Classes and Characteristics
General Users: Can browse products, view product details, add/remove products from the cart.



2.4 Design and Implementation Constraints
Must be implemented in React


Must use Context API for cart state management


Routing handled with React Router


No server/backend connection(Optional)



3. Functional Requirements
3.1 Navigation Bar
Displays links to:


Home Page


About Page


Cart icons(with count of items)
Logo (Optional)



3.2 Home Page (/)
Shows a list of all available products
Each product shows: Image, Title, short description, Price, and “Add to Cart” button
Clicking a product navigates to its details page
Implement a search functionality for product title or description
Implement a product filter option (drop-down)like 
Low  => high
High => low



3.3 Product Details Page (/product/:id)
Shows full product information:


Image


Title


Description


Price


“Add to Cart” button


Handles invalid product IDs gracefully


3.4 About Page (/about)
Static page with information about the store/project


3.5 Cart Page (/cart)
Displays a list of added products


Each item shows: Image, Title, Price, Quantity


“Remove from Cart” button for each item
Make sure this list shows table row view


Cart state is maintained using the React Context API


Cart persists only during the session (not saved after refresh)


3.6 Cart Functionality
Add a product to the cart from the home or product detail page


Remove a product from the cart, only on the cart page.
The total price calculation is shown on the cart page


Automatically updates the total item count in the nav
3.7 404 Not Found Page
Make sure the user navigated invalid route, then show the 404 Not Found Page.



4. Non-functional Requirements
4.1 Usability Requirements
Mobile responsive


Easy navigation


Clear call-to-action buttons


4.2 Reliability
The application should not crash on navigation or invalid input


4.3 Maintainability
Component-based architecture


Clean and modular code for ease of updates



5. Technologies Used
React (Functional Components, Hooks)


React Router (for page routing)


React Context API (for cart state management)


Tailwind CSS 
