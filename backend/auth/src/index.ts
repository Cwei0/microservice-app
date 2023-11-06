import { config } from "dotenv";
import { App } from "./utils/server";
import { env } from "process";

config();
const port = env.PORT;

new App(port);