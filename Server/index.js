const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');

app.use(cors());
app.use(express.json());        // req.body

app.post('/comms', async(req, res) => {
    try {
        const username   = req.body.username; 
        const content  = req.body.content;
        const newComment = pool.query(
            'INSERT INTO comments (username, content) VALUES($1, $2)',
            [username, content],
            (err, result) => {
                if (err) {
                    return console.error(err.message);
                }
                res.json(result.rows);
            }
        );
    } catch (e) {
        console.error(e.message);
    }
});

app.get('/comms', async(req, res) => {
    try {
        const allComments = pool
        .query(
            'SELECT * FROM comments',
            (err, result) => {
                if (err) {
                    return console.error(err.message);
                }
                res.json(result.rows);
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(8080, () => {
    console.log('Server has started on port 8080');
});
