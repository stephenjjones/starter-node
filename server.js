const path = require('path');

const express = require('express');
const morgan = require('morgan');

const authRouter = require('./auth/routes');
const apiRouter = require('./api/routes');

const app = express();

app.use(morgan('short'));

const staticPath = path.resolve(__dirname, 'static');
app.use('/static', express.static(staticPath));

app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404);
  res.send('File not found');
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send('Internal server error.');
});

app.listen(3003, () => {
  console.log('App started on port 3000');
});
