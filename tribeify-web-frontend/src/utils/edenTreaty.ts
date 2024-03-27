import type { App } from "../../../tribeify-backend/app/src/index";
import { treaty } from "@elysiajs/eden";

export const backendApi = treaty<App>("localhost:8080");
