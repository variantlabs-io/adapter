"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basecontroller_1 = require("../controller/basecontroller");
const BaseRouter = (0, express_1.Router)();
const baseController = new basecontroller_1.BaseController();
BaseRouter.use("/v1/message", baseController.init);
BaseRouter.use("/whatsapp/inbound", baseController.inbound);
exports.default = BaseRouter;
