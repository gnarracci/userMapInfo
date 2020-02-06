import { Router } from 'express';

import { TokenValidation } from './../auth/validateToken';
import { userController } from '../controllers/userControllers';

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', TokenValidation, userController.list);
        this.router.get('/:id', TokenValidation, userController.getOne);
        this.router.post('/', TokenValidation, userController.create);
        this.router.put('/:id', TokenValidation, userController.update);
        this.router.delete('/:id', TokenValidation, userController.delete);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
