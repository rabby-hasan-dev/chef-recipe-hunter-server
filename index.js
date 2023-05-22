const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const recipe = require('./data/foodRecipes.json')

app.get('/', (req, res) => {
    res.send('Welcome to my server side')
});

app.get('/chef', (req, res) => {
    res.send(chef)
});

app.get('/chef/:id', (req, res) => {
    const cId = req.params.id;
    const selectedChef = chef.find(cr => cr.id === cId);
    res.send(selectedChef);
})

app.get('/recipe', (req, res) => {
    res.send(recipe);
});

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;

    const selectedId = recipe.find(r => r._id === id);
    res.send(selectedId);


})


app.listen(port, () => {
    console.log(`Chef Recipe hunter server port on${port}`)
});