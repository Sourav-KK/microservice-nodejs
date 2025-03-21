import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import expressRateLimit from "express-rate-limit";
import express, { Express, urlencoded, json } from "express";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productRoutes";
import router from "./routes/index";

const app: Express = express();
const PORT_NO = 3000;

app.use(cors({ origin: ["http://localhost/4000", "http://localhost/4001"] }));
app.use(json());
app.use(helmet({}));
app.use(cookieParser());
app.use(compression({}));
app.use(expressRateLimit());
app.use(urlencoded({ extended: true }));

app.use("/api", router);
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);

app.listen(PORT_NO, () => {
  console.info(`Server running on port: ${PORT_NO}`);
});
