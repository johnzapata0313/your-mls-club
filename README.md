# Find Your MLS Club 

A web application that helps users discover their closest Major League Soccer (MLS) team based on their location. Users can create an account, search for their nearest team, and view detailed information about all 30 MLS clubs. This application matches users with their geographically closest MLS team and displays team information including stadium, location, founding year, and official team colors. The results page features a dynamic gradient background using each team's actual colors for a personalized experience.

![7F46E5D0-2A70-4825-95FA-1D72040DB0BD](https://github.com/user-attachments/assets/d4b85917-b67f-49e1-840e-a2cddb786c91)

[Check out the Magic!](https://your-mls-club.onrender.com/)

## Technologies Used

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - Database for storing user accounts and team data
- **Mongoose** - MongoDB object modeling
- **Passport.js** - User authentication middleware

### Frontend
- **EJS** - Templating engine for dynamic HTML
- **Bootstrap** - Responsive CSS framework
- **Font Awesome** - Icons

### Other Tools
- **bcrypt** - Password hashing for security
- **express-session** - Session management
- **connect-flash** - Flash messages for user feedback

## Features

-  User authentication (signup/login/logout)
-  Search for closest MLS team by city and state
-  Complete database of all 30 MLS teams
-  Dynamic results page with team-colored gradient backgrounds
-  Team information display (stadium, location, colors, founding year)
-  Message board functionality
-  Secure user sessions

## What I Learned

This project involved building a full-stack application with MongoDB/Mongoose for database management, implementing user authentication using Passport.js with bcrypt password hashing and session management, and developing RESTful routes with EJS templating for dynamic content rendering. Key technical challenges included debugging scope and syntax issues, managing Git workflows, and designing a location-matching algorithm that calculates distances to find the closest teams through array iteration and conditional logic. The experience reinforced skills in database queries, middleware for route protection, form handling, and creating dynamic styling based on database values.

## Future Enhancements

- Add actual distance calculations using latitude/longitude
- Include team logos and images
- Add more detailed team statistics and history
- Implement favorite teams feature
- Create a map view of all MLS teams
- Add social sharing features


