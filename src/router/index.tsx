import { lazy } from 'react';
const Open = lazy(() => import('../routes/open'));
const LoginLayout = lazy(() => import('../layouts/LoginLayout'));
const Dashboard = lazy(() => import('../routes/dashboard'));
const UserInfo = lazy(() => import('../routes/userCenter/userInfo'));
const UserSettings = lazy(() => import('../routes/userCenter/settings'));
const UserLog = lazy(() => import('../routes/userCenter/log'));
const ShareAccount = lazy(() => import('../routes/userCenter/share'));
const AssetTable = lazy(() => import('../routes/assets'));
const TodoList = lazy(() => import('../routes/assets/test'));
const AssetsDetail = lazy(() => import('../routes/assets/detail'));
const App = lazy(() => import('../App'));

export const routes = [
    /* {
        path: '/login',
        name: LoginLayout,
        children:false
    }, */
    {
        path: '/agent',
        name: Open,
        cName: '开通',
        type: 'open',
        children:false
    },
    {
        path: '/dashboard',
        name: Dashboard,
        cName: '仪表盘',
        type: 'leftR',
        icon: 'PieChartOutlined',
        children:false
    },
    {
        path: '/to',
        name: TodoList,
        cName: '测试',
        type: 'leftR',
        icon: 'FieldBinaryOutlined',
        children:false
    },
    {
        path: '/asset',
        name: AssetTable,
        cName: '资产列表',
        type: 'leftR',
        icon: 'BarsOutlined',
        children:false
    },
    {
        path: '/asset/detail',
        name: AssetsDetail,
        type: 'leftR',
        icon: 'BarsOutlined',
        children:false
    },
    {
        path: '/user/info',
        name: UserInfo,
        cName: '基本资料',
        type: 'userCenterR',
        children:false
    }, ,
    {
        path: '/user/settings',
        name: UserSettings,
        cName: '安全设置',
        type: 'userCenterR',
        children:false
    },
    {
        path: '/user/log',
        name: UserLog,
        cName: '操作日志',
        type: 'userCenterR',
        children:false
    },
    {
        path: '/user/share',
        name: ShareAccount,
        cName: '共享账号',
        type: 'userCenterR',
        children:false
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