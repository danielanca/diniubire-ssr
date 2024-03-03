import loadable from '@loadable/component';

const Mainpage = loadable(() => import('../pages/Mainpage'), {ssr:true});
const FAQBlock = loadable(() => import("../pages/FAQ/FAQBlock"), {ssr:true});
const PublicLayout = loadable(() => import("../layouts/public/PublicLayout"), {ssr:true});
const ProduseleNoastre = loadable( ()=> import("../components/OurProducts/ProduseleNoastre"), {ssr:true});
const ProductView = loadable( () => import('../components/mini/Product/ProductView'), {ssr:true});
const FinishOrder = loadable( () => import('../components/CartPage/FinishOrder'), {ssr:true});
const CartPage = loadable( ()=> import('../components/CartPage/CartPage'), {ssr:true});
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
        path:"cosulmeu",
        layout: PublicLayout,
        component: CartPage,
      
    },
    {
        path:"intrebari",
        layout: PublicLayout,
        component: FAQBlock,
    },
    ...TextContentRoutes
]





export default publicRoutes;