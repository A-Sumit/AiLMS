import axios from 'axios';

export const classifyLead = async (message) => {
  const labels = [
    'Web Development',
    'SEO Services',
    'Mobile App Development',
    'UI/UX Design',
    'DevOps',
    'Consulting',
    'Other'
  ];

  const url = 'https://api-inference.huggingface.co/models/facebook/bart-large-mnli';
  const headers = {
    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, {
      inputs: message,
      parameters: {
        candidate_labels: labels,
      },
    }, { headers });

    const bestMatch = response.data?.labels?.[0];
    const confidence = response.data?.scores?.[0];

    return { category: bestMatch, confidence };

  } catch (error) {
    console.error('Hugging Face API error:', error.response?.data || error.message);
    return { category: 'Unclassified', confidence: 0 };
  }
};
