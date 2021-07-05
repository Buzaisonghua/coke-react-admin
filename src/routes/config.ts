/**
 * 路由创建
 */
export interface MenuBase {
    path:string; // 地址
    title: string; // 文件名
    icon?:string; // 图表
    component?: string; // 组件
    query?:string; // 参数
    requireAuth?: string;
    route?: string;
    /** 是否登录校验，true不进行校验（访客） */
    login?: boolean;
}

export interface Menu extends MenuBase {
    children?: MenuBase[]
}