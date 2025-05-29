import Lead from '../models/Lead.js';
import { classifyLead } from '../services/classifier.js';

export const createLead = async (req, res) => {
  try {
    const { name, email, message, source } = req.body;

    const { category, confidence } = await classifyLead(message);

    const lead = new Lead({
      name,
      email,
      message,
      source,
      classified_category: category,
      classification_confidence: confidence,
    });

    await lead.save();

    res.status(201).json({ success: true, lead });

  } catch (error) {
    console.error('Create Lead Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ created_at: -1 });
    res.status(200).json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Server error while fetching leads' });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status field is required' });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.status(200).json({ success: true, lead: updatedLead });

  } catch (error) {
    console.error('Error updating lead status:', error);
    res.status(500).json({ message: 'Server error while updating status' });
  }
};


export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.status(200).json({ success: true, message: 'Lead deleted successfully' });

  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ message: 'Server error while deleting lead' });
  }
};
