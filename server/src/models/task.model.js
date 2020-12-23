import { model, Schema } from 'mongoose';

const TaskSchema = Schema({
  description: {
    type: String,
    trim: true,
    required: true
  },
  status: {
    type: String,
    trim: true,
    enum: ['TODO', 'IN PROGRESS', 'COMPLETED']
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default model('Task', TaskSchema);
