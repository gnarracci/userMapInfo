import express, { Application } from 'express'
import morgan from 'morgan';

import cors from 'cors';

import authRoutes from './routes/authRoutes';
import indexRoutes from './routes/indexRoutes';
import registerRoutes from './routes/registerRoutes';
import userRoutes from './routes/userRoutes';
import miscRoutes from './routes/miscRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors({origin: 'http://localhost:4200'||'http://127.0.0.1:4200'}));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/info', indexRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/ext/misc', miscRoutes);
        this.app.use('/api/auth/login', authRoutes);
        this.app.use('/api/auth/profile', authRoutes);
        this.app.use('/api/auth/register', registerRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();