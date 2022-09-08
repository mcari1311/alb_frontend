# Learn Albanian App FRONT-END

### Link to Website 
https://learnalb-frontend.herokuapp.com/?albWord=Si+je%3F%3F

### Link to BACK-END git repo
https://github.com/mcari1311/alb_backend

### Link to BACK-END website
https://learnalb-backend.herokuapp.com/alb

### Description

Being from a very small, often unknown country has meant that growing up very few people I knew spoke it. For my project I wanted to create an effective app that helped people learn Albanian. My inspiration was quizlet/duolingo outline. 

### Example

This is an example code snippet from the alb.api.js file. 

```
export const getAlbSing = (id) => {
    const URL = `https://learnalb-backend.herokuapp.com/alb/${id}`
    const response = axios.get(URL)
    console.log(response)
    return response 
}

```

### List of Features 

* Connection to data base already populated with 15+ words
* Show route that focuses on one word
* Link to external resource


### Routes
 
 React handled the Create and Edit routes, the rest will be featured in my backend. 

### List of Technologies Used
* Javascript
* CSS


### Future Plans 

Due to time constraints I wasn't able fufill the complete vision I had for this project. There are many features I'd like to add. An example is a seperate section that pushes the words that you are having difficulty with into another array so you can restudy them. Another feature I'll work on is adding audio!

