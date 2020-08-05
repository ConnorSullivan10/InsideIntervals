# Inside Intervals (NSS Back-End Capstone)

## Technologies Used
1. HTML5, SCSS, JavaScript, jQuery, C#, ASP.Net Core 3.1, Dapper, T-SQL
2. React Bootstrap, Bulma, & SASS 0.5.0: All customized styling
3. React: For bundling Class-based and functional components and building the UI
4. ASP.NET Core & Dapper for buildout of the API and MVC Setup
5. T-SQL for construction of the database via Microsoft SQL Server Management Studio, that houses most of the data used throughout the application
6. Axios calls from the front-end to the external hookTheory API (https://www.hooktheory.com/api/trends/docs) to pull data used in the Chord Predictor component


## Description
guitArchive was born out of the idea that there are many secondhand vintage guitar owners who'd like to find more details about their prized vintage instruments. Guitarists can use this application to find more details about the guitar models of their favorite vintage guitar brands, along with detailed specifications of other users' guitars, so they are hopefully able to narrow down the range of years within which their instrument was made. Upon authenticating, users are able to add, edit, and delete their own vintage guitar as well as view custom Tone Tip suggestions to help them find the right amp to meet their needs whether they are a current vintage guitar owner, or are simply in the market to see what guitars are out there. Over time as the database grows, and users have a larger range of instrument data to look at, this application can help keep the history of these guitars alive long after they're gone, as well as keep a record of current instruments that will one day be considered vintage in their own right.

## Screenshots

![Inside Intervals Preview 1](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/home1.PNG)
![Inside Intervals Preview 2](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/home2.PNG)
![Inside Intervals Preview 3](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning1.PNG)
![Inside Intervals Preview 4](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning2.PNG)
![Inside Intervals Preview 5](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning3.PNG)
![Inside Intervals Preview 6](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning4.PNG)
![Inside Intervals Preview 7](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning5.PNG)
![Inside Intervals Preview 8](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning6.PNG)
![Inside Intervals Preview 9](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/learning7.PNG)
![Inside Intervals Preview 10](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/userProfile1.PNG)
![Inside Intervals Preview 11](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/userProfile2.PNG)
![Inside Intervals Preview 12](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/userProfile3.PNG)
![Inside Intervals Preview 13](https://raw.githubusercontent.com/ConnorSullivan10/InsideIntervals/master/InsideIntervals.ui/src/screenshots/userProfile4.PNG)

## How to run
1. Clone down this project.
2. Then to create database that the application will run off of, navigate to SQL Server Management Studio > File > Open > File > and Choose the InsideIntervalsSeedData.sql file (located in the Seed Data folder of this project) > Press Open > the file will be opened within SQL Server Management Studio. Finally all what you need to do is to press Execute button to create and seed the database that will be connected to the application, and make sure the database is running.
3. Then you are going to open the InsideIntervals.sln in Visual Studio, and press the "▷ IIS Express" button at the top to run the API in conjunction with the database you just created.
4. Finally in Visual studio code, you will navigate to the project's UI folder: `cd insideintervals.ui`
5. In the helpers folder, you are going to create an apiKeys.json file that contains the link to your newly created APIs URL via the following setup json inside curly brackets: "baseUrl": "https://localhost:(yourlink)/api"
6. If you'd like to access the chord predictor functionality located in the User Profile component, after logging in via Google, then you'll need to go to hooktheory.com in your browswer, and create an account with email and password.
7. After creating a hookTheory account, you will create a hookKeys.json file in the helpers folder of insideintervals.ui, with the following setup using your newly created HookTheory username and password inside curly brackets: "hookKeys" : {
    "username": "{insertYourUsernameHere",
    "password": "{insertYourPasswordHere"
  }
8. To get authentication working, you can email me at cksullvn@gmail.com to locate the firebase project keys to enable authentication, and create a contants.js file in the helpers folder, that will contain these firebase keys to enable authentication via firebase.\
9. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
10. In the command line interface of insideintervals.ui type: `npm install`   
11. Then type the following command in the terminal to launch the project in your browser: `npm start`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
