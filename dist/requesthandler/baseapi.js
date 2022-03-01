"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = void 0;
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: 'https://messages-sandbox.nexmo.com/',
    timeout: 15000,
});
const responseBody = (response) => response.data;
exports.requests = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, body, header) => instance.post(url, body),
    put: (url, body) => instance.put(url, body).then(responseBody),
    delete: (url) => instance.delete(url).then(responseBody)
};
