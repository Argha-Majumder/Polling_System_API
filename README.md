# Polling System API

In this project, any user can post questions by using appropriate routes mentioned below and add options to it and also add votes to the option.

## Features

- Create a question (you can add as many questions as you want)

- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Required Routes

- /questions/create (To create a question)

- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

## Installation

Step-by-step process for installation:

1. First clone the repository using the command

```
git clone https://github.com/Argha-Majumder/Polling_System_API.git
```

2. The go to the directory where this file is located and install the required package by opening a terminal and using

```
npm install
```

3. Now start the server by using this command

```
npm start
```

4. Then open any web browser and type 
https://localhost:8000


## Folder Stucture

Polling_System_API
    
    |----config
    |       |----mongoose.js
    |
    |----controllers
    |       |----option_controller.js
    |       |----question_Controller.js
    |
    |----models
    |       |----option.js
    |       |----questions.js
    |
    |----routes
    |       |----index.js
    |       |----question_routes.js
    |
    |----index.js
    |
    |----package-lock.json
    |
    |----package.json
    |
    |----README.md

## Testing 

You can test your API two ways:
1. VS code extension like REST Client
![image](https://github.com/Argha-Majumder/Polling_System_API/assets/81928385/31f01106-5200-4e25-937c-ab42af83a138)

    And then create a file called route.rest and use the above mentioned routes to test it
![image](https://github.com/Argha-Majumder/Polling_System_API/assets/81928385/b602c8b1-46c5-41fb-ae79-f12938a6f728)

    Remember to replace the ids

2. You can also use postman and try the above mentioned routes
![image](https://github.com/Argha-Majumder/Polling_System_API/assets/81928385/d07d327b-b348-4ad1-916f-54261ca5dab4)

## Hosting

To host this API, I use [railway](https://railway.app). Simply go to the railway site and give authorization control to railway. Make sure to upload your project files to github. Then deploy it from railway. See my api in action [here](https://pollingsystemapi-production.up.railway.app/)