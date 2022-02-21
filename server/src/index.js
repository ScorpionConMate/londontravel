const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const routes = require('./routes/index.js');
const { AdminJsConfig, AuthenticationOptions } = require('./config/adminJs.config.js');
require('./services/auth.service.js');
const UserRepository = require('./repositories/user.repository');
AdminJS.registerAdapter(AdminJSMongoose);
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log('Connected to MongoDB'));

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());

const adminJs = new AdminJS(AdminJsConfig);

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, AuthenticationOptions);

app.use(adminJs.options.rootPath, router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    console.log(err);
    return res.status(500).json({ error: err });
});

app.use('/api/v1/', routes);

app.listen(port, async () => {
    await UserRepository.createDefaultAdmin();
    console.log(`Example app listening on port ${port}!`)
});
