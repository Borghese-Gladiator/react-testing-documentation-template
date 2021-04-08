# React + Documentation + Testing Example
Created example frontend with:
- Create React App (Jest && React Testing Library) - Docz (uses MDX internally for markdown + JS display)
- Material UI for components and styling

## Initialization Process
- `npx create-react-app react-testing-documentation-template`
- `npm i -D prop-types docz concurrently serve`
- Add scripts to package.json to start/build/serve docz site
- Add scripts to package.json to start both docz & React frontend
- Add script to package.json to serve production locally
- Moved testing for clarity to devDependencies: `npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event`
- Deployed to Netlify by linking to GitHub Continuous Deployment

## Methodology
- Jest (unit) tests run on components
- documentation written on components and included with code
#### For Each Component
- add .MDX documentation file
- add .test.js testing file
- add PropTypes (propTypes & defaultProps) at bottom of JS file
#### Notes
- bundle size not increased by MDX & test.js files since Webpack grabs JS files (& compiled TSX files).
- since the end output is HTML/CSS/JS - all packages are "build"/"dev" dependencies

## Usage (package.json scripts)
- `npm run start:dev` - view both documentation and app
- `npm run start:doz` - view documentation at [http://localhost:4838/](http://localhost:4838/)
- `npm run start:app` - view app in dev environment at [http://localhost:3000/](http://localhost:3000/)
- `npm run prod` - builds & serves in prod environment

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
