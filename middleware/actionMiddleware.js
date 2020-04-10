db = require('../data/helpers/actionModel');

exports.validateId = (req, res, next) => {
    db.get(req.params.aid).then(action => {
        if (action === null) {
            res.status(400).send('Invalid Action ID');
        } else {
            next();
        }
    }).catch(e => console.log(e));
}

exports.validateAction = (req, res, next) => {
    if (req.body.description === null ||
        req.body.description === undefined ||
        req.body.description === '' ||
        req.body.notes === null ||
        req.body.notes === undefined ||
        req.body.notes === '') {
            res.status(400).send('Missing Required Data. Please provide description, and notes')
        } else {
            req.action = req.body;
            next();
        }
}

exports.validateChanges = (req, res, next) => {
    let changes;
    if (req.body.notes === undefined && 
        req.body.description === undefined &&
        req.body.completed === undefined) {
        res.status(400).send('Missing required data. Please provide at least one field to update');
    } else {
    db.get(req.params.aid).then(action => {
        changes = action;
        console.log(changes);
        if (req.body.notes !== undefined && req.body.notes.length > 0) changes = {...changes, notes: req.body.notes}
        if (req.body.description !== undefined && req.body.description.length > 0) changes = {...changes, description: req.body.description}
        if (req.body.completed !== undefined) changes = {...changes, completed: req.body.completed}
        req.changes = changes;
        next();
    });
}
}
