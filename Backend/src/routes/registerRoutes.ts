import { Router } from 'express';
import { RegisterController } from '../controllers/registerController';


class RegisterRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.post('/', RegisterController.register);
    }
}

const registerRoutes = new RegisterRoutes();
export default registerRoutes.router;