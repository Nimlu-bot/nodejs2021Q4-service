"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
// import { get, getAll, save, remove, update } from './user.service.js';
// import { User } from './user.model.js';
// interface Body {
//   id: string;
//   name: string;
//   login: string;
//   password: string;
// }
// interface Params {
//   id: string;
// }
exports.userRoutes = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.get('/users', async (__, res) => {
        // const users = await getAll();
        // res.send(users.map(User.toResponse));
        res.send('hi');
    });
    // fastify.get('/users/:id', async (req: FastifyRequest, res: FastifyReply) => {
    //   const { id } = req.params as Params;
    //   const user = await get(id);
    //   res.send(User.toResponse(user));
    // 	res.send(id)
    // });
    // fastify.post('/users', async (req: FastifyRequest, res: FastifyReply) => {
    //   const savedUser = await save(req.body);
    //   res.code(201).send(User.toResponse(savedUser));
    // });
    // fastify.delete(
    //   '/users/:id',
    //   async (req: FastifyRequest, res: FastifyReply) => {
    //     const { id } = req.params as Params;
    //     await remove(id);
    //     res.code(204);
    //   }
    // );
    // fastify.put('/users/:id', async (req: FastifyRequest, res: FastifyReply) => {
    //   const { id } = req.params as Params;
    //   const user = await update(id, new User(req.body as Body));
    //   res.code(200).send(User.toResponse(user));
    // });
    console.log('hi');
    // done();
    console.log('hi2');
});
// export const userRoutes = fp(routes);
