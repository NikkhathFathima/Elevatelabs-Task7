# User Data Fetcher

This project demonstrates the use of the JavaScript Fetch API to retrieve user data from a public API and display it dynamically on a webpage. It covers fundamental concepts of asynchronous JavaScript, JSON parsing, error handling, and DOM manipulation.

## Table of Contents

-   [Objective](#objective)
-   [Live Demo](#live-demo)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [API Used](#api-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Application](#running-the-application)
-   [Usage](#usage)
-   [Error Handling](#error-handling)
-   [Project Structure](#project-structure)
-   [Outcome](#outcome)
-   [Contributing](#contributing)
-   [License](#license)

## Objective

The primary objective of this task was to build a simple web application that fetches user data from a public API and displays it on the page, reinforcing key JavaScript concepts.


## Features

* *Dynamic Data Fetching:* Fetches user information from an external API when the page loads.
* *User-Friendly Display:* Presents user name, email, and address in a structured and styled format.
* *Reload Functionality:* A dedicated button to refetch and update user data.
* *Error Handling:* Displays a clear message to the user if data fetching fails (e.g., due to network issues or API errors).
* *Responsive Styling:* Basic CSS styling to improve readability and presentation.

## Technologies Used

* *HTML5:* For the basic structure of the webpage.
* *CSS3:* For styling the user cards and general page layout.
* *JavaScript (ES6+):*
    * *Fetch API:* For making asynchronous HTTP requests.
    * *Async/Await:* For handling asynchronous operations in a more synchronous-like manner.
    * *DOM Manipulation:* For dynamically creating and inserting elements into the HTML.

## API Used

The project fetches user data from the following public API:
https://jsonplaceholder.typicode.com/users

This API provides mock data for various resources, ideal for testing and development purposes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* A web browser (Google Chrome is recommended for development and debugging).
* A code editor (VS Code is recommended).
* (Optional, but recommended) VS Code Live Server extension for easy local development.
* Git installed on your machine.
* A GitHub account (for deploying the live demo).

### Installation

1.  *Clone the repository:*
    bash
    git clone [https://github.com/YourGitHubUsername/your-repo-name.git](https://github.com/YourGitHubUsername/your-repo-name.git)
    
    (Replace YourGitHubUsername/your-repo-name with your actual GitHub username and repository name)

2.  *Navigate into the project directory:*
    bash
    cd your-repo-name
    

### Running the Application

There are two primary ways to run this application locally, and one for live deployment:

#### 1. Local Development with VS Code Live Server (Recommended)

1.  Open the project folder in VS Code (File > Open Folder...).
2.  Install the "Live Server" extension by Ritwick Dey if you haven't already.
3.  Right-click on index.html in the VS Code Explorer and select "Open with Live Server".
4.  Your default browser will open the application, typically at http://127.0.0.1:5500/index.html.

#### 2. Local Development by Opening Directly in Browser

1.  Navigate to the project directory on your computer's file system.
2.  Double-click index.html.
3.  The file will open in your default web browser.
    * *Note:* While this method works for simple scripts, fetch API requests can sometimes be restricted by browser security policies (CORS) when loaded via the file:// protocol. Using Live Server (Option 1) avoids these potential issues.

#### 3. Deploying a Live Demo with GitHub Pages

To make your project accessible online, you can deploy it using GitHub Pages:

1.  *Create a New GitHub Repository:*
    * Go to [github.com](https://github.com/) and log in.
    * Click the "+" sign in the top right corner and select "New repository".
    * Give it a descriptive name (e.g., user-data-fetcher), choose "Public", and optionally initialize with a README.
    * Click "Create repository".

2.  *Push Your Code to GitHub:*
    * Open your terminal/command prompt in your project folder.
    * If not already a Git repo: git init
    * Add your files: git add .
    * Commit changes: git commit -m "Initial commit"
    * Add remote origin (get this from your new GitHub repo page): git remote add origin https://github.com/YourGitHubUsername/your-repo-name.git
    * Push: git branch -M main then git push -u origin main

3.  *Enable GitHub Pages:*
    * Go to your repository on GitHub.
    * Click on the *"Settings"* tab.
    * In the left sidebar, click on *"Pages"*.
    * Under "Branch", select main (or master) from the dropdown.
    * Leave the folder as / (root).
    * Click the *"Save"* button.

4.  *Access Your Live Demo:*
    * After a minute or two, refresh the "Pages" section.
    * Your live demo URL will be displayed (e.g., https://yourgithubusername.github.io/your-repo-name/). Copy this URL and paste it into the "Live Demo" section at the top of this README.

## Usage

* Upon opening the index.html page (either locally or via the live demo), the application will automatically attempt to fetch and display user information.
* If data is loaded successfully, you will see a list of user cards.
* Click the "Reload Users" button to fetch and display the data again.

## Error Handling

The application includes basic error handling for network requests:

* If the Fetch API encounters a network error (e.g., no internet connection), or if the API returns a non-2xx HTTP status code, an error message will be displayed on the page instead of the user data.
* You can test this by disabling your internet connection and then clicking the "Reload Users" button.

## Project Structure
