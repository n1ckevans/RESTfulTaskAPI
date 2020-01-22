const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
  index(_, res) {
    Task.find()
      .then(allTasks => res.json({
        tasks: allTasks,
        msg: "Do your job!"
      }))
      .catch(err => res.json({ error: err }));
  },

  create(req, res) {
    Task.create(req.body)
      .then(newTask => res.json({ task: newTask }))
      .catch(err => res.json({ error: err }));
  },

  update(req, res) {
      Task.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // will return the new updated obj rather than
      // the object before the update
      new: true
    }
    )
      .then(updatedTask => res.json({ task: updatedTask }))
      .catch(err => res.json({ error: err }));
  },

  getById(req, res) {
    Task.findById(req.params.id)
      .then(task => {
        res.json({ task: task });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  delete(req, res) {
    Task.findByIdAndDelete(req.params.id)
      .then(deletedTask => {
        res.json({ deleted: deletedTask });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

}