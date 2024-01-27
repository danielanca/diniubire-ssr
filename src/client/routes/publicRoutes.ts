import { lazy } from "react";

const Mainpage = lazy(() => import('../pages/Mainpage'));
const FAQBlock = lazy(() => import("../pages/FAQ/FAQBlock"));
const PublicLayout = lazy(() => import("../layouts/public/PublicLayout"));

import { publicRoutesType } from './types';


const publicRoutes :  publicRoutesType[] = [

    {
        path:"",
        layout: PublicLayout,
        component: Mainpage ,
    },
    {
        path:"intrebari",
        layout: PublicLayout,
        component: FAQBlock,
    },


]

export default publicRoutes;