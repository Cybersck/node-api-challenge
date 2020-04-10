const db = require('../data/helpers/projectModel');

exports.getProject = (req, res) => {
    db.get(req.params.id).then(project => res.status(200).send(project)).catch(e => console.log(e));
}

exports.addProject = (req, res) => {
    db.insert(req.project).then(project => res.status(201).send({message: 'Added Successfully', project: project})).catch(e => console.log(e));

} 

exports.updateProject = (req, res) => {
    db.update(req.params.id, req.changes).then(project => res.status(201).send({message: 'Updated Successfully', project: project}))
    .catch(e => console.log(e))
}

exports.deleteProject = (req, res) => {
    db.remove(req.params.id).then(res.status(200).send('Success')).catch(e => console.log(e));
} 

exports.getProjectActions = (req, res) => {
    db.getProjectActions(req.params.id).then(actions => res.status(200).send(actions)).catch(e => console.log(e));
}