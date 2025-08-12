# Projects Data Structure

This file contains the project data structure used throughout the portfolio. Here's how to add your real project information:

## JSON Structure

Each project should have the following properties:

```json
{
  "id": 1,                                    // Unique identifier (number)
  "name": "Project Name",                     // Display name of the project
  "coverImage": "/path/to/image.jpg",         // Project thumbnail/cover image
  "title": "Brief Project Title",             // Subtitle or tagline
  "description": "Short description...",      // Brief description for cards
  "techStack": ["React", "Node.js", "..."],  // Array of technologies used
  "githubLink": "https://github.com/...",    // GitHub repository URL
  "liveSiteLink": "https://yoursite.com",    // Live project URL
  "briefDescription": "Detailed description...", // Longer description for detail page
  "challenges": [                             // Array of challenges faced
    "Challenge 1 description",
    "Challenge 2 description"
  ],
  "improvements": [                           // Array of future improvements
    "Improvement 1 description",
    "Improvement 2 description"
  ]
}
```

## Image Guidelines

- **Cover Images**: Use high-quality screenshots or mockups of your projects
- **Recommended Size**: 400x300px or similar aspect ratio (4:3)
- **Format**: JPG, PNG, or WebP
- **Location**: Store images in `src/assets/projects/` or use external URLs

## Adding New Projects

1. Open `src/data/projects.json`
2. Add a new project object to the `projects` array
3. Make sure the `id` is unique and incremental
4. Fill in all required fields
5. Test the project card and detail page

## Example Real Project Entry

```json
{
  "id": 7,
  "name": "My Awesome App",
  "coverImage": "/src/assets/projects/awesome-app.jpg",
  "title": "Full-Stack Web Application",
  "description": "A modern web application built with React and Express, featuring user authentication and real-time features.",
  "techStack": ["React", "Express.js", "MongoDB", "Socket.io", "JWT"],
  "githubLink": "https://github.com/yourusername/awesome-app",
  "liveSiteLink": "https://awesome-app.vercel.app",
  "briefDescription": "A comprehensive web application that demonstrates modern full-stack development practices with real-time communication, secure authentication, and responsive design.",
  "challenges": [
    "Implementing real-time communication with Socket.io",
    "Setting up secure JWT authentication flow",
    "Optimizing database queries for better performance"
  ],
  "improvements": [
    "Add mobile app version using React Native",
    "Implement push notifications",
    "Add advanced user analytics dashboard"
  ]
}
```

## Notes

- Keep descriptions concise but informative
- Include 3-6 main technologies in the tech stack
- Challenges should be specific technical hurdles you overcame
- Improvements should be realistic future enhancements
- Always test links before publishing
