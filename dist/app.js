"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.get('/saludar', (req, res) => {
    console.log('Hola estoy saludando');
    res.json({ nombre: 'Diego Baes' });
});
app.use((0, morgan_1.default)('dev'));
exports.default = app;
