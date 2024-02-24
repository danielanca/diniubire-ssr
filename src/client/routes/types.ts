import React, {LazyExoticComponent} from "react";
type LayoutType = LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any> | null ;
type ComponentType = LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any>;

export interface publicRoutesType {
    path: string;
    layout: LayoutType;
    component: ComponentType;
    props?: Record<string, any>;
    navProps?: Record<number,any>;
}