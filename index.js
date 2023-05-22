const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chef=require('./data/chef');

app.get('/', (req, res) => {
    res.send('Welcome to my server side')
});

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Chef Recipe hunter server port on${port}`)
});