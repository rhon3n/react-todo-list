# React TodoList
A simple React Front End application that gets a list of dummy todos from [JSONplaceholder](http://jsonplaceholder.typicode.com/).

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Features](#features)
1. [Roadmap](#roadmap)
1. [Given More Time](#given-more-time)
1. [Portfolio](#portfolio)
1. [Development](#development) 
    1. [Create React App](#create-react-app)

## Usage

> We all need to make todo lists sometimes. This app allows you to add or remove todos from the list. *__Since this app is used to demonstrate my ability to control state among components in React without using Redux, it does not have a working backend—any changes made will not persist after a page reload.__*

## Requirements

- Node 10.2.1 or higher
- NPM 5.6.0 or higher

## Features

The features of this app are very simple:

1. You can add a todo to the list
1. You can mark a todo completed
1. You can remove a todo by clicking the 'x'

## Roadmap

- Unit Testing.
- Integration Testing.
- As a user, I would like to be able to create an account that would store my todos.
- As a user, I would like to see that when I add a todo, it persists when I am logged in.
- As a user, I would like to see that nothing happens when the submit button is clicked and I haven't added anything in the addTodo box.
- As a user, I would like to see that when I delete a todo, only the todo I click is deleted.

## Given More Time

Given more time I would add Unit, Integration and End to End testing to the app. Also, I would add input sanitization to make sure only strings that are not empty are able to be added to the list.

As far as deployment goes, I would deploy to [Heroku](https://heroku.com) with the smallest dyno to start, increasing the dyno size/performance with increased traffic. Then, using an APM diagnose when we will be bottlenecking and autoscale horizontally and vertically to add more dynos accordingly.

Styling would be handled using either Bootstrap or Bulma.

## Portfolio

Follow this link to find my [portfolio](http://rhonen.design).

## Development

### Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
