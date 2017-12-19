const mongo = require('mongodb');

module.exports = function(app, db) {
    app.get('/notes/:id', (req, res) => {
        const filterData = {'_id': new mongo.ObjectID(req.params.id)};

        db.collection('notes').findOne(filterData, (err, result) => {
            if (err) { res.send(err); }
                
            res.send(result);
        });
    });

    app.post('/notes', (req, res) => {
        const note = { title: req.body.title, text: req.body.body };

        db.collection("notes").insert(note, (err, result) => {
            if (err) { res.send(err); }
            
            res.send(result);
        });
    });

    app.put('/notes/:id', (req, res) => {
        const filterData = {'_id': new mongo.ObjectID(req.params.id)};
        const note = { title: req.body.title, text: req.body.body };

        db.collection("notes").update(filterData, note, (err, result) => {
            if (err) { res.send(err); }

            res.send(result);
        });
    })

    app.delete('/notes/:id', (req, res) => {
        const filterData = {'_id': new mongo.ObjectID(req.params.id)};

        db.collection('notes').remove(filterData, (err, result) => {
            if (err) { res.send(err); }

            res.send(result);
        });
    });
};