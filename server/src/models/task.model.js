import { model, Schema } from 'mongoose';

const TaskSchema = Schema({
  description: {
    type: String,
    trim: true,
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

export default model('Task', TaskSchema);
