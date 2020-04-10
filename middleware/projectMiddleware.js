const db = require('../data/helpers/projectModel');

exports.validateId = (req, res, next) => {
    db.get(req.params.id).then(project => {
        if (project === null) {res.status(400).send('Invalid Project Id')}
        else {
            next();
        }
    })
}

exports.validateProject = (req, res, next) => {
    if (req.body.name === null ||
        req.body.name === undefined ||
        req.body.name === '' ||
        req.body.description === null ||
        req.body.description === undefined ||
        req.body.description === '') {
            res.status(400).send(`Missing required data. {name: string, description: string, completed: bool | optional `);
        }
        else {
            req.project = req.body;
            next();
        }
} 

exports.validateChanges = (req, res, next) => {
    let changes;
    if (req.body.name === undefined && 
        req.body.description === undefined &&
        req.body.completed === undefined) {
        res.status(400).send('Missing required data. Please provide at least one field to update');
    } else {
    db.get(req.params.id).then(project => {
        changes = project;
        if (req.body.name !== undefined && req.body.name.length > 0) changes = {...changes, name: req.body.name}
        if (req.body.description !== undefined && req.body.description.length > 0) changes = {...changes, description: req.body.description}
        if (req.body.completed !== undefined) changes = {...changes, completed: req.body.completed}
        req.changes = changes;
        next();
    });
}
}