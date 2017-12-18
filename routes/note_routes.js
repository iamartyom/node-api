module.exports = function(app, db) {
    app.get('/notes/:id', (req, res) => {
        res.send("Meow");
    });

    app.post('/notes', (req, res) => {
        const note = { title: req.body.title, text: req.body.body };

        db.collection("notes").insert(note, (err, result) => {
            if (err)
            {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    });
};