import express, {Request, Response} from 'express';
import './Database/Firebase'
import cors from 'cors';
import routes from './Routes'

const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);






app.listen(3000, ()=>{
    console.log('App running...');
})