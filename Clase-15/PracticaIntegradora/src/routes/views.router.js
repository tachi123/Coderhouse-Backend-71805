/**
 * Router para las vistas o renderizaciones
 */
import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {
    res.render('index');
})

router.get('/crearProducto', (req,res) => {
    res.render('newProduct');
})

export default router;