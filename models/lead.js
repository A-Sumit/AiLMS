import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  source: String,
  classified_category: String,
  classification_confidence: Number,
  status: {
    type: String,
    default: 'new',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Lead', LeadSchema);
