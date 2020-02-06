import { Request, Response } from 'express';

import pool from '../database';
import { hashUser } from './../helpers';


class RegisterControllers {

    public async register (req: Request, res: Response) {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image
        };
        newUser.password = await hashUser.encryptPassword(newUser.password);
        await pool.query('INSERT INTO users SET  ?', [newUser]);
        res.status(200).json({message: 'User was Registered!'});
    }
}

export const RegisterController = new RegisterControllers();

export default RegisterControllers;