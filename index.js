import express from 'express';
import bodyParser from 'body-parser';

import guideRoutes from './routes/guide.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/guide', guideRoutes);

app.get('/', (req, res)=>res.send('Spravochnik studentov.'));


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
