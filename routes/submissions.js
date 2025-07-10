const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const delayMiddleware = require('../middleware/delay');
const getModerationStatus = require('../utils/moderation');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const submissionsFile = path.join(__dirname, '../data/submissions.json');

function loadSubmissions() {
  if (!fs.existsSync(submissionsFile)) return [];
  return JSON.parse(fs.readFileSync(submissionsFile));
}

function saveSubmissions(data) {
  fs.writeFileSync(submissionsFile, JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
  let submissions = loadSubmissions();

  // Add random moderation status
  submissions = submissions.map((s) => ({
    ...s,
    status: s.status || getModerationStatus()
  }));

  res.json(submissions);
});

// POST /submissions
router.post('/', delayMiddleware, (req, res) => {
  const { videoUrl, stickers, challengeId, duration } = req.body;

  if (!videoUrl || !challengeId || !duration) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (parseInt(duration) > 15) {
    return res.status(400).json({ error: 'Video exceeds 15 seconds' });
  }

  const newSubmission = {
    id: Date.now().toString(),
    videoUrl,
    stickers,
    challengeId,
    status: 'pending',
    timestamp: new Date().toISOString()
  };

  const submissions = loadSubmissions();
  submissions.push(newSubmission);
  saveSubmissions(submissions);

  res.json({ message: 'Submission pending review by moderator' });
});

// BONUS: Preview before submit
router.post('/preview', (req, res) => {
  const { videoUrl, stickers, challengeId, duration } = req.body;

  if (!videoUrl || !challengeId || !duration) {
    return res.status(400).json({ error: 'Missing required fields for preview' });
  }

  res.json({
    preview: {
      videoUrl,
      stickers,
      challengeId,
      duration
    },
    message: 'This is a preview. No data saved.'
  });
});

module.exports = router;
