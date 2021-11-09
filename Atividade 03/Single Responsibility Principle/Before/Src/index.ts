import express, {Request, Response} from 'express';
import * as admin from 'firebase-admin';
import cors from 'cors';

const app = express();

var serviceAccount = require("./firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(express.json());
app.use(cors());



app.get('/filmes', async (req: Request, res: Response) => {
    const filmesRef = db.collection('filmes');

    const filmesDoc = await filmesRef.get();

    const filmes: any[] = [];

    filmesDoc.docs.forEach(doc=>filmes.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(filmes);
});

app.post('/filmes', async (req: Request, res: Response) =>{
    const {nome, genero, duracao} = req.body;

    const filme = {nome, genero, duracao}

    const resultado = await db.collection('filmes').add(filme)

    return res.status(201).json({id: resultado.id, ...filme});
});

app.get('/filmes/:id', async (req: Request, res: Response) =>{

    const id = req.params.id;

    const filme = await db.collection('filmes').doc(id).get();

    return res.json({id: filme.id, ...filme.data()});

});

app.delete('filmes/:id', async (req: Request, res: Response) =>{
    const id = req.params.id;

    const filme = await db.collection('filmes').doc(id).delete();

    return res.status(204).send();
})



app.listen(3000, ()=>{
    console.log('App running...');
})