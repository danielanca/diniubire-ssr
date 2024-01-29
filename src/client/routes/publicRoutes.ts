import { lazy } from "react";

const Mainpage = lazy(() => import('../pages/Mainpage'));
const FAQBlock = lazy(() => import("../pages/FAQ/FAQBlock"));
const PublicLayout = lazy(() => import("../layouts/public/PublicLayout"));
const ProduseleNoastre = lazy( ()=> import("../components/OurProducts/ProduseleNoastre"));
const ProductView = lazy( () => import('../components/mini/Product/ProductView'));
const FinishOrder = lazy( () => import('./../components/CartPage/FinishOrder'));
import { TextContentRoutes } from "./contentRoutes/contentRoutes";
import { publicRoutesType } from './types';


const publicRoutes : publicRoutesType[] = [

    {
        path:"",
        layout: PublicLayout,
        component: Mainpage ,
    },
    {
        path:"produsele-noastre",
        layout: PublicLayout,
        component: ProduseleNoastre,
    },
    {
        path:"produs/:productID",
        layout: PublicLayout,
        component: ProductView,
      
    },
    {
        path:"finalizare-comanda",
        layout: PublicLayout,
        component: FinishOrder,
      
    },
    {
        path:"intrebari",
        layout: PublicLayout,
        component: FAQBlock,
    },
    ...TextContentRoutes
]





export default publicRoutes;