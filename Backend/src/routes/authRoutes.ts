import { Router } from 'express';

import { TokenValidation } from './../auth/validateToken';
import { AuthController } from './../controllers/authController';

class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.post('/', AuthController.login);
        this.router.get('/', TokenValidation, AuthController.profile);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
