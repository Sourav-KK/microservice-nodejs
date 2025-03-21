import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import expressRateLimit from "express-rate-limit";
import express, { Express, urlencoded, json } from "express";
import router from "./routes/index";

const app: Express = express();
const PORT_NO = 4000;

app.use(cors({}));
app.use(json());
app.use(helmet({}));
app.use(cookieParser());
app.use(compression({}));
app.use(expressRateLimit());
app.use(urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT_NO, () => {
  console.info(`Server running on port: ${PORT_NO}`);
});
