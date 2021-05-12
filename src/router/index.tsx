import { lazy } from 'react';
const Open = lazy(() => import('../routes/open'));
/* const LoginLayout = lazy(() => import('./LoginLayout')); */
const Dashboard = lazy(() => import('../routes/dashboard'));
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'));
const UserSettings = lazy(() => import('../routes/userCenter/settings'));
const UserLog = lazy(() => import('../routes/userCenter/log'));
const ShareAccount = lazy(() => import('../routes/userCenter/share'));
const AssetsTable = lazy(() => import('../routes/assets'));
const TodoList = lazy(() => import('../routes/assets/test'));

export const routes = [
    {
        path: '/agent',
        name: Open,
        cName: '开通',
        type: 'open',
    },
    {
        path: '/dashboard',
        name: Dashboard,
        cName: '仪表盘',
        type: 'leftR',
        icon: 'PieChartOutlined',
    },
    {
        path: '/to',
        name: TodoList,
        cName: '测试',
        type: 'leftR',
        icon: 'FieldBinaryOutlined'
    },
    {
        path: '/assets',
        name: AssetsTable,
        cName: '资产列表',
        type: 'leftR',
        icon: 'BarsOutlined'
    },
    {
        path: '/user/info',
        name: UserInfo,
        cName: '基本资料',
        type: 'userCenterR'
    }, ,
    {
        path: '/user/settings',
        name: UserSettings,
        cName: '安全设置',
        type: 'userCenterR'
    },
    {
        path: '/user/log',
        name: UserLog,
        cName: '操作日志',
        type: 'userCenterR'
    },
    {
        path: '/user/share',
        name: ShareAccount,
        cName: '共享账号',
        type: 'userCenterR'
    }/* ,
    {
        path: '/loophole',
        name: 'Loophole',
        cName: '',
        children: [{
            path: '/loophole/list',
            name: 'LoopholeList',
        }
        ]
    } */
]