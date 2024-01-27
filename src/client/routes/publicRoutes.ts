import { lazy } from "react";

const Mainpage = lazy(() => import('../pages/Mainpage'));
const FAQBlock = lazy(() => import("../pages/FAQ/FAQBlock"));


import { publicRoutesType } from './types';


const publicRoutes :  publicRoutesType[] = [

    {
        path:"",
        layout: null,
        component: Mainpage,
    },
    {
        path:"intrebari",
        layout: null,
        component: FAQBlock,
    },


]

export default publicRoutes;