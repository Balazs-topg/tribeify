//* the ts-ignore below is necessary for it to build on vercel
//@ts-ignore
import type { App } from "../../../tribeify-backend/app/src/index";
import { treaty } from "@elysiajs/eden";

export const backendApi = treaty<App>("localhost:8080");
