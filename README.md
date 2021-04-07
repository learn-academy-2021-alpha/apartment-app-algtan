# Process

## Challenge 1 - Planning

1. Draw out a proposed database schema
    - 'User' model from Devise for user accounts
        - 'has_many' apartments
    - 'Apartment' model for the apartments
        - 'belongs_to' user

2. What tables do you anticipate you will need?
    - Two tables
        - users
        - apartments

3. What associations do your tables have?
    - User
        - 'has_many' apartments
    - Apartment
        - 'belongs_to' user

4. Explore some of the free Bootstrap themes available, which one do you want to use?
    - Navbar
    - Cards 

5. Wireframe the main pages in the application.
    - Home page
    - Index page of all apartment listings
    - Show page of a single apartment listing
    - Create page to show a form for a new apartment listing
    - Edit page to show a form for an existing apartment listing
    - Login page
    - Registration page
    - Account profile page
        - Shows user's listings
        - Allows user to change account information

6. What forms will you need?
    - User
        - Create user account
        - Edit user account
    - Apartment
        - Create apartment listing
        - Edit apartment listing

7. What fields are on those forms?
    - User form
        - Email
        - Password
        - STRETCH: Username
    - Apartment form
        - Street
        - City
        - State
        - Manager
        - Email
        - Price
        - Bedrooms
        - Bathrooms
        - Pets

8. Do your forms match your database schema?
    - Yes

9. What are the user flows?
    - Not logged in
        - 1) View list of apartments
        - 2) View single apartment instance
    - Log in
        - 1) Log in
        - 2) Show profile page
    - Register
        - 1) Register
        - 2) Show profile page
    - From profile page (user is logged in)
        - Able to do the following from the profile page:
            - View all of the user's listings and click on a single instance
            - Click on a link to create a new listing
            - Click on a link to change account information
        - Able to do the following from a single listing:
            - Edit listing
            - Delete listing

10. Protected vs. unprotected pages?
    - Protected
        - All forms
            - User create
            - User update
            - Apartment create
            - Apartment update
        - Account profile page
    - Unprotected
        - Home page
        - Index page of all apartments
        - Show page of apartment instance
        - Login page
        - Registration page

11. What is the most important user flow of the application?
    - Log in and have options for user to create listing, update listing

12. Is this flow easy and intuitive for the user?
    - Yes

## Challenge 2 - Authentication
    
1. Implement your authentication code, with stubbed out main pages

## Challenge 3 - Main UI

1. Implement your main UI pages in your single page application

2. Use data mocks to work with real data, but without the complexity of API integration

## Challenge 4 - API

1. Finish off your application by hooking up the Database via API endpoints

2. Is everything secure?
