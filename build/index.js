import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routers/router.js';
const app = Express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(Express.static(path.join(__dirname, "..", "public")));
app.use("/scripts", Express.static(path.join(__dirname, '..', 'build')));
app.use(Express.urlencoded({ extended: false }));
app.use("/", router);
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});
