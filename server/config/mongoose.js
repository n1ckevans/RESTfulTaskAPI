const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_tasks_api', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('../models/task');