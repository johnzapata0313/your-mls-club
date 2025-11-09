# Find Your MLS Club 

A web application that helps users discover their closest Major League Soccer (MLS) team based on their location. Users can create an account, search for their nearest team, and view detailed information about all 30 MLS clubs.

## Project Overview

This application matches users with their geographically closest MLS team and displays team information including stadium, location, founding year, and official team colors. The results page features a dynamic gradient background using each team's actual colors for a personalized experience.

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

- ✅ User authentication (signup/login/logout)
- ✅ Search for closest MLS team by city and state
- ✅ Complete database of all 30 MLS teams
- ✅ Dynamic results page with team-colored gradient backgrounds
- ✅ Team information display (stadium, location, colors, founding year)
- ✅ Message board functionality
- ✅ Secure user sessions

## What I Learned

### Database Management
- How to structure and populate a MongoDB database with multiple documents
- Using Mongoose to create schemas and models
- Performing database queries and filtering results

### Authentication & Security
- Implementing user authentication with Passport.js
- Hashing passwords with bcrypt for security
- Managing user sessions and protecting routes
- Using middleware to verify logged-in users

### Full-Stack Development
- Building RESTful routes (GET, POST, PUT, DELETE)
- Passing data between routes and views
- Rendering dynamic content with EJS templating
- Handling form submissions and user input

### Problem Solving
- Debugging scope issues with function exports
- Fixing mismatched brackets and syntax errors
- Managing Git repositories and remote connections
- Creating dynamic styling based on database values

### Algorithm Design
- Implementing location-matching logic to find closest teams
- Using conditional logic for distance calculations
- Iterating through arrays to find optimal matches

## Installation

1. Clone the repository
```bash
git clone https://github.com/johnzapata0313/your-mls-club.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your MongoDB connection string
```
DB_STRING=your_mongodb_connection_string
```

4. Run the setup route to populate the database with MLS teams
```
Navigate to: http://localhost:1996/setup-teams
```

5. Start the server
```bash
node server.js
```

6. Visit `http://localhost:1996` in your browser

## Future Enhancements

- Add actual distance calculations using latitude/longitude
- Include team logos and images
- Add more detailed team statistics and history
- Implement favorite teams feature
- Create a map view of all MLS teams
- Add social sharing features

## Credits

- MLS team data researched with assistance from Claude AI
- Location-matching algorithm developed with Claude AI assistance
- Bootstrap for responsive design framework

---

**Built by John Zapata**
