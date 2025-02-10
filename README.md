# Themed Blog Listing Application

## Overview

This project is a **Themed Blog Listing Application** built with **React, TypeScript, Redux Toolkit, Redux Thunk, Redux Persist, and Tailwind CSS**. The application supports **light and dark themes**, fetches blog posts from an API, and implements state management efficiently. It is deployed on **Vercel** with a **CI/CD pipeline** using **GitHub Actions**.

## Features

### 1\. Theming Support

- Dark and Light Mode using **Redux Toolkit**
- Theme persistence with **Redux Persist and LocalStorage**

### 2\. API Integration

- Fetches blog posts from **JSONPlaceholder API**
- Displays **title, excerpt, and author information**
- Search feature for filtering blog posts dynamically

### 3\. State Management

- Global state management using **Redux Toolkit**
- **Redux Thunk** for async API calls
- **Redux Logger** for debugging
- **Redux Persist** for maintaining state across sessions

### 4\. Routing & UI

- Navigation with **React Router**
- **Home Page**: Lists blog posts
- **Blog Detail Page**: Shows full content of a post
- Responsive UI with **Tailwind CSS**

### 5\. Deployment & CI/CD

- Hosted on **Vercel**
- **GitHub Actions** for automated deployment on push

## Installation & Setup

### Prerequisites

- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Steps

1.  git clone https://github.com/your-username/themed-blog-app.gitcd themed-blog-app
2.  npm install # or yarn install
3.  npm run dev # or yarn dev
4.  npm run build # or yarn build
5.  npm run start # or yarn start

## Deployment

### Deploy to Vercel

1.  npm install -g vercel
2.  vercel

### CI/CD with GitHub Actions

- The project includes a GitHub Actions workflow that triggers on **push to the main branch**.
- Deployment is automated to **Vercel**.

## Folder Structure

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  .  ├── src/  │   ├── components/        # UI Components  │   ├── pages/             # Page Components  │   ├── redux/             # Redux Store, Slices  │   ├── styles/            # Global CSS  │   ├── App.tsx            # Main App Component  │   ├── main.tsx           # Entry Point  ├── public/                # Static Assets  ├── .github/workflows/     # CI/CD Pipeline  ├── README.md              # Project Documentation  ├── package.json           # Dependencies & Scripts  ├── tsconfig.json          # TypeScript Config  └── vercel.json            # Vercel Config  `

## Challenges & Solutions

### 1\. **State Persistence Issue**

- **Problem:** State was resetting on page refresh.
- **Solution:** Used **Redux Persist** to store theme and API data.

### 2\. **Non-Serializable State Warning**

- **Problem:** Redux Toolkit warned about non-serializable values.
- **Solution:** Configured middleware to ignore non-serializable checks in store.ts.

### 3\. **API Latency Issues**

- **Problem:** Initial page load was slow due to API response time.
- **Solution:** Implemented **loading states** and **skeleton UI** for better UX.

## Technologies Used

TechPurposeReactFrontend FrameworkTypeScriptType SafetyRedux ToolkitState ManagementRedux ThunkAsync State HandlingRedux PersistState PersistenceTailwind CSSStyling & Responsive UIReact RouterRoutingJSONPlaceholderMock APIVercelHostingGitHub ActionsCI/CD Pipeline

## Future Enhancements

- **Improve UI/UX** with animations
- **Add pagination** for blog listing
- **Implement Unit Tests** with Jest

## Live Demo

🔗 [**View Live App**](https://your-app.vercel.app/)

## Contributing

Feel free to **fork**, **contribute**, and **submit PRs**!

## License

MIT License. Free to use and modify. 😊
