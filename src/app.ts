import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { usersRoutes } from "./routes/users.routes"
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"

const app: Application = express()

app.use(express.json())
app.use("/users", usersRoutes)
app.use(handleAppErrorMiddleware)

// app.contact(express.json())
// app.contact("/contacts", contactsRoutes)

export default app