import publicRoutes from "./publicRoutes";
import adminRoutes from "./adminRoutes";
import shopRoutes from "./shopRoutes";
import gameRoutes from "./gameRoutes";
import { publicRoutesType } from "./types";

const routes : publicRoutesType[]  = [
    ...publicRoutes,
    // ...adminRoutes,
    // ...shopRoutes,
    // ...gameRoutes
]

export default routes;