const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let idToUpdate = req.params.id 
    let queryText = `UPDATE images SET likes = likes + 1 WHERE id = $1`
    pool.query(queryText, [idToUpdate])
    .then((result) => {
        console.log('in UPDATE:', result);
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
}); // END PUT Route



// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM  images ORDER BY id;`;
    pool.query(queryText)
    .then ((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error GETTING');
        res.sendStatus(500)
    })
}); // END GET Route


//POST Route
router.post('/', (req, res) => {
    console.log('POST data:', req.body);
})

module.exports = router;