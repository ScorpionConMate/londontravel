import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';
import routes from './src/routes/index.js';
import { AdminJsResources } from './src/resources/index.js';

AdminJS.registerAdapter({ Database: AdminJSMongoose.Database, Resource: AdminJSMongoose.Resource });
config();
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log('Connected to MongoDB'));

const adminJs = new AdminJS({
    databases: [],
    resources: AdminJsResources,
    rootPath: '/admin',
    branding: {
        companyName: 'London Travel',
        favicon: 'http://londontravel.com.ar/images/favicon.png',
        logo: 'http://www.londontravel.com.ar/images/LondonBlackldpi-p-500.png',
        softwareBrothers: false,
    },

});

const router = AdminJSExpress.buildRouter(adminJs);


const app = express();
app.use(adminJs.options.rootPath, router)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.SERVER_PORT;

await import('./src/services/auth.service.js');
app.use((err, req, res, next) => {
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.json({ error: err });
})

app.use('/api/v1/', routes);

console.log();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
