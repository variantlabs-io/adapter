import { Router } from "express"
import { BaseController } from "../controller/basecontroller"

const BaseRouter = Router()
const baseController = new BaseController()

BaseRouter.use("/v1/message", baseController.init)
BaseRouter.use("/whatsapp/inbound", baseController.inbound)

export default BaseRouter;