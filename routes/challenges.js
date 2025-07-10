const express = require('express');
const router = express.Router();

const challenges = [
  {
    id: '1',
    title: 'Dance Challenge',
    videoUrl: 'https://example.com/video1',
    stickers: ['🔥', '💃', '🕺']
  },
  {
    id: '2',
    title: 'Lip Sync Battle',
    videoUrl: 'https://example.com/video2',
    stickers: ['🎤', '🎶', '😂']
  },
  {
    id: '3',
    title: 'Pet Antics',
    videoUrl: 'https://example.com/video3',
    stickers: ['🐶', '😹', '❤️']
  },
  {
    id: '4',
    title: 'Cooking Fail',
    videoUrl: 'https://example.com/video4',
    stickers: ['🍳', '🔥', '😭']
  },
  {
    id: '5',
    title: 'Transformation',
    videoUrl: 'https://example.com/video5',
    stickers: ['💄', '✨', '🤯']
  }
];

router.get('/', (req, res) => {
  res.json(challenges);
});

module.exports = router;
