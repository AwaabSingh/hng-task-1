import express from "express";
import UserRoute from './route/UserRoute'

const app = express();


// Body parser
app.use(express.json());

// Hook up routes
app.use('/api/me', UserRoute)


app.listen(4000, () => console.log('Server running on port 4000'));
