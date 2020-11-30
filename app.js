const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000

app.use(compression());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(bodyParser.json());

const appRouter = require('./app/modules/app-route');
app.use('/app', appRouter);

const catalogRouter = require('./app/modules/book/book-router');
app.use('/catalog', catalogRouter);

const priceRouter = require('./app/modules/price/price-router');
app.use('/price', priceRouter);

const sortRouter = require('./app/modules/sort/sort-router');
app.use('/sort', sortRouter);
