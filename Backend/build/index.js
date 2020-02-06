"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const miscRoutes_1 = __importDefault(require("./routes/miscRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: 'http://localhost:4200' || 'http://127.0.0.1:4200' }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/info', indexRoutes_1.default);
        this.app.use('/api/users', userRoutes_1.default);
        this.app.use('/api/ext/misc', miscRoutes_1.default);
        this.app.use('/api/auth/login', authRoutes_1.default);
        this.app.use('/api/auth/profile', authRoutes_1.default);
        this.app.use('/api/auth/register', registerRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map