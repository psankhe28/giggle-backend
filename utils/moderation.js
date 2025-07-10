module.exports = function getModerationStatus() {
  const statuses = ['pending', 'approved', 'rejected'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};
