"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const path_1 = __importDefault(require("path"));
const fastify_swagger_1 = __importDefault(require("fastify-swagger"));
const user_router_1 = require("./resources/users/user.router");
// import { boardRoutes } from './resources/boards/board.router.js';
// import { taskRoutes } from './resources/tasks/task.router.js';
const api = path_1.default.resolve('./doc/api.yaml');
const app = (0, fastify_1.default)({
    logger: false,
});
app.register(fastify_swagger_1.default, {
    exposeRoute: true,
    routePrefix: '/doc',
    mode: 'static',
    specification: {
        baseDir: '',
        path: api,
    },
});
app.get('/', async () => 'Service is running!');
app.register(user_router_1.userRoutes);
// app.register(boardRoutes);
// app.register(taskRoutes);
console.log('hi3');
exports.default = app;
