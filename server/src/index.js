import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';
import routes from './routes/index.js';

import { AdminJsConfig, AuthenticationOptions } from './config/adminJs.config.js';
import adminjs from 'adminjs';

AdminJS.registerAdapter(AdminJSMongoose);
config();
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log('Connected to MongoDB'));

const app = express();
const adminJs = new AdminJS({
    ...AdminJsConfig,
    dashboard: {
        handler: async () => {
            return {
                some: 'data'
            }
        },
        component: AdminJS.bundle('./components/Dashboard/index.jsx'),
    }
});

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, AuthenticationOptions);
app.use(adminJs.options.rootPath, router)
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


await import('./services/auth.service.js');
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    console.log(err);
    return res.status(500).json({ error: err });
});

app.use('/api/v1/', routes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
