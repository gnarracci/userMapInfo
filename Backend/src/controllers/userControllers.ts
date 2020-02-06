import { Request, Response} from 'express';

import pool from '../database';
import { hashUser } from './../helpers';

class UserControllers {

    public async list (req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if (users.length > 0) {
            return res.json(users[0]);
        }
        res.status(404).json({message: "User doesn't exists!"});
    }

    public async create (req: Request, res: Response) {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image
        };
        newUser.password = await hashUser.encryptPassword(newUser.password);
        await pool.query('INSERT INTO users SET ?', [newUser]);
        res.status(200).json({message: 'The User was Saved!'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const updateUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image
        };
        updateUser.password = await hashUser.encryptPassword(updateUser.password);
        await pool.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        res.status(200).json({message: 'The User was Updated!'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.status(200).json({message: 'The User was deleted!'});
    }
}

export const userController = new UserControllers();

export default UserControllers;