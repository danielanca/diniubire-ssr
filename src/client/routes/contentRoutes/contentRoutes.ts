
import { lazy } from "react";

const SimpleContent = lazy(() => import('../../components/SimpleContent/SimpleContent'));
const PublicLayout = lazy(() => import('../../layouts/public/PublicLayout'));

import { publicRoutesType } from '../types';

export const TextContentRoutes : publicRoutesType[] = [

    {
        path:"termeni-si-conditii",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'Terms'}
    },
    {
        path:"metode-plata",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'PaymentMethods'}
    },
    {
        path:"politica-retur",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'RefundPolicy'}
    },
    {
        path:"politica-confidentialitate",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'PrivacyPolicy'}
    },
    {
        path:"politica-de-cookies",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'CookiesPolicy'}
    },
    {
        path:"afiliere",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'AffiliateProgram'}
    },
    {
        path:"contact",
        layout: PublicLayout,
        component: SimpleContent,
        props: {type:'ContactSimple'}
    },

]