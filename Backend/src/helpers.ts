import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

class HashUser {

    public async encryptPassword (password: any) {
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        return hash;
    }

    public async matchPassword (password: any, savedPassword: any) {
       const match = await bcryptjs.compare(password, savedPassword);
       return match;
    }

}

export const hashUser = new HashUser();

export default HashUser;
