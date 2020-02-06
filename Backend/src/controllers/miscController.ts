import { Request, Response} from 'express';

import pool from '../database';

class miscController {

    public async viewRole (req: Request, res: Response) {
        const roles = await pool.query("SELECT * FROM role");
        res.status(200).json(roles);
    }

    public async getRole (req: Request, res: Response) {
        const { id } = req.params;
        const role = await pool.query('SELECT * FROM role WHERE id = ?', [id]);
        if (role.length > 0) {
            return res.status(200).json(role[0]);
        }
        res.status(404).json({message: "Role doesn't finded!"});
    }

    public async addRole (req: Request, res: Response) {
        const newRole = {
            role: req.body.role,
            role_descrip: req.body.role_descrip
        };
        await pool.query("INSERT INTO role SET ?", [newRole]);
        res.status(200).json({message: 'Role Saved!'});
    }

    public async editRole (req: Request, res: Response) {
        const { id } = req.params;
        const updateRole = {
            role: req.body.role,
            role_descrip: req.body.role_descrip
        }
        await pool.query("UPDATE role SET ? WHERE id = ?", [updateRole, id]);
        res.status(200).json({message: 'Role Updated!'});
    }

    public async deleteRole (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query("DELETE FROM role WHERE id = ?", [id]);
        res.status(200).json({message: 'Role Deleted!'});
    }

}

export const miscControllers = new miscController();

export default miscController;