export interface routeConfigList {
    path: string; // 地址
    title: string;
    component: string;
    icon?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    login?: boolean; /** 是否登录校验，true不进行校验（访客） */
}

export interface routeConfig extends routeConfigList {
    children?: routeConfigList[]
}