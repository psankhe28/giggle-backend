const express = require('express');
const bodyParser = require('body-parser');
const chalkPromise = import('chalk');

(async () => {
  const chalk = (await chalkPromise).default;

  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Routes
  const challengeRoutes = require('./routes/challenges');
  const submissionRoutes = require('./routes/submissions');

  app.use('/challenges', challengeRoutes);
  app.use('/submissions', submissionRoutes);

  console.log(chalk.cyan(`
 ██████╗ ██╗ ██████╗  ██████╗ ██╗     ███████╗
██╔════╝ ██║██╔════╝ ██╔════╝ ██║     ██╔════╝
██║  ███╗██║██║  ███╗██║  ███╗██║     █████╗  
██║   ██║██║██║   ██║██║   ██║██║     ██╔══╝  
╚██████╔╝██║╚██████╔╝╚██████╔╝███████╗███████╗
 ╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
`));
  console.log(chalk.green('Gigglle backend running on http://localhost:' + PORT));
  app.listen(PORT);
})();
