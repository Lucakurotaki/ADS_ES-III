import {Router, Request, Response} from 'express';
import {db} from '../Database/Firebase';

const router = Router();

router.get('/filmes', async (req: Request, res: Response) => {
    const filmesRef = db.collection('filmes');

    const filmesDoc = await filmesRef.get();

    const filmes: any[] = [];

    filmesDoc.docs.forEach(doc=>filmes.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(filmes);
});

router.post('/filmes', async (req: Request, res: Response) =>{
    const {nome, genero, duracao} = req.body;

    const filme = {nome, genero, duracao}

    const resultado = await db.collection('filmes').add(filme)

    return res.status(201).json({id: resultado.id, ...filme});
});

router.get('/filmes/:id', async (req: Request, res: Response) =>{

    const id = req.params.id;

    const filme = await db.collection('filmes').doc(id).get();

    return res.json({id: filme.id, ...filme.data()});

});

router.delete('filmes/:id', async (req: Request, res: Response) =>{
    const id = req.params.id;

    const filme = await db.collection('filmes').doc(id).delete();

    return res.status(204).send();
});

export default router;