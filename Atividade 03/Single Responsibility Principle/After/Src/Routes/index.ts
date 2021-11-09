import {Router} from "express";

import filmeRoutes from './filmeRouter';

const router = Router();

router.use('filmes', filmeRoutes);

export default router;