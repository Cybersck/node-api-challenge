db = require('../data/helpers/actionModel');

exports.getAction = (req, res) => {
    db.get(req.params.aid).then(action => {
        res.status(200).send(action);
    }).catch(e => console.log(e));
}

exports.addAction = (req, res) => {
    let newACtion = {
        project_id: req.params.id,
        description: req.action.description,
        notes: req.action.notes
    }
    req.action.completed !== undefined ?
    newACtion = {...newACtion, completed: req.action.completed}
    : newAction = {...newACtion}
    db.insert(newACtion).then(action => res.status(201).send({message: 'Successfully Added', action: action}))
    .catch(e => console.log(e));
}

exports.updateAction = (req, res) => {
    db.update(req.params.aid, req.changes).then(action => res.status(201).send({message: 'Successfully Updated', action: action}))
    .catch(e => console.log(e));
}

exports.deleteAction = (req, res) => {
    db.remove(req.params.aid).then(res.status(200).send('Succesfully Deleted')).catch(e => console.log(e));
}