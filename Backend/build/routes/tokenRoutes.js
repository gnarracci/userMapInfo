"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("./../controllers/authController");
class TokenRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', authController_1.AuthController.loggedIn);
    }
}
const tokenRoutes = new TokenRoutes();
exports.default = tokenRoutes.router;
//# sourceMappingURL=tokenRoutes.js.map