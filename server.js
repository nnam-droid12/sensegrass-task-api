const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const maplocations = require('./jsonData')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/maplocations', (req, res) => {
    res.json(maplocations);
});

app.get('/maplocations/:maplocationId', (req, res) =>{
    const maplocationId = Number(req.params.maplocationId);
    const maplocation = maplocations[maplocationId];
    if(maplocation){
        res.status(200).json(maplocation);
    }else{
        res.status(404).json({
            error: 'No places found'
        });
    }
});

app.listen(port, ()=>{
    console.log(`app is running on Port ${port}`);
});