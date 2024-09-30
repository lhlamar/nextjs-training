# Next.js Project

This is a Next.js project developed with TypeScript and built using the create-next-app template. This project includes an About Me page, an API page utilizing a third-party API, and a contact form that integrates with a simple mock API.
Getting Started

To run the development server:

```
npm run dev
```

Open http://localhost:3000 in your browser to view the application.



Running the Project

Clone the repository.
Run npm install
Run the development server using
```
npm run dev
``` 
Visit http://localhost:3000 in your browser to explore the app.

## Project Structure
```
/src
   /app                 --> App directory for Next.js routing
      /about
         /page.tsx      --> About Me page
      /api
         /page.tsx      --> API page fetching third-party data
   /components
      /ContactForm.tsx  --> Contact form component
      /Layout.tsx       --> Layout component for navigation
   /styles
      /about.module.css --> CSS Module for About Me page
      /api.module.css   --> CSS Module for API page
   /api
      /contact/route.ts --> API route for contact form submission
/public                 --> Public assets like images
```

This project uses TypeScript to improve code quality and maintainability. You can find the TypeScript configuration in tsconfig.json. All components and API routes are written in TypeScript, ensuring strong typing across the project.

## Why?
This is for my nexts training I am working on for CGI, written by Lucas Lamar (Consultant)

To be reviewed by John Whaley