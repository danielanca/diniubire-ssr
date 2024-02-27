import publicRoutes from "./publicRoutes";
import adminRoutes from "./adminRoutes";
import shopRoutes from "./shopRoutes";
import { publicRoutesType } from "./types";

const routes : publicRoutesType[]  = [
    ...publicRoutes,
    // ...adminRoutes,
    // ...shopRoutes,
   
]

export default routes;