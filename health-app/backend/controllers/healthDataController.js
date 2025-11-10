// backend/controllers/healthDataController.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const getHealthData = async (req, res) => {
  try {
    const { data, error } = await supabase.from('health_data').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addHealthData = async (req, res) => {
  try {
    const { user_id, mood, activity, date } = req.body;
    const { data, error } = await supabase.from('health_data').insert([{ user_id, mood, activity, date }]);
    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getHealthData, addHealthData };
