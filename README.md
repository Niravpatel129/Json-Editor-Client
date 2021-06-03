### Local Deployment Steps

### Production Deployment

https://nirav-json-editor.herokuapp.com/

1. Clone and build the npm packages (paste this into a mac or linux terminal)

```
git clone git@github.com:Niravpatel129/Json-Editor-Client.git
cd Json-Editor-Client
npm install
```

2. Start the project using

```
nom run start
```

### Summary of the Assignment:

Design and build a JSON editor where they are presented with a JSON data from https://random-data-api.com, It should have the basic functionalities of a json editor with bonus steps to enhance the functionality.

### Approach

My approach was to build a recursive render function that would loop through the object and render if the type was not an object, the rest of the features were implemented using the basic react fundamentals of state management for example opening and closing the json tree, or editing a json tree and remembering the edited parts to be stored on a database somewhere.

### What features you implemented

- The app renders a json tree recursively, meaning it will work with any nested json object.

- You can click on any the key and chance the value and the app will remember the change on the state.

- You can toggle the tree via a basic local state for the component

- Type of each value is placed next to the key

### Given more time

I would have liked to incorporate a backend to handle the database for all the changes, add basic testing to test for basic rendering, and open up Figma and try to play around with some design styles for the project.
