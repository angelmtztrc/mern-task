import { model, Schema } from 'mongoose';

const ProjectSchema = Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default model('Project', ProjectSchema);
