// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('动态页面加载失败', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
/* eslint-disable */
const routes = [
  { path: '/preview',         name: 'preview',        modulePath: 'HomePage'        },
  { path: '/',                name: 'indexPage',      modulePath: 'IndexPage'       },
  { path: '/search',          name: 'search',         modulePath: 'Search'          },
  { path: '/profile',         name: 'profile',        modulePath: 'Profile'         },  // 个人中心
  { path: '/people',          name: 'people',         modulePath: 'People'          },  // 主播页
  { path: '/play/:id',        name: 'play',           modulePath: 'Play'            },  // 播放页
  { path: '/special/:id',     name: 'special',        modulePath: 'Special'         },  // 专辑栏目列表
  { path: '/buy',             name: 'buy',            modulePath: 'Buy'             },  // 单次购买页
  { path: '/buyFinish',       name: 'buyFinish',      modulePath: 'BuyFinish'       },  // 支付完成页
  { path: '/subscription',    name: 'subscription',   modulePath: 'Subscription'    },  // 已订阅栏目列表页
]
/* eslint-enable */
export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  const loadPage = ((modulePath, name, cb) => {
    const importModules = Promise.all([
      System.import(`containers/${modulePath}/reducer`),
      System.import(`containers/${modulePath}/sagas`),
      System.import(`containers/${modulePath}/index`),
    ]);

    const renderRoute = loadModule(cb);
    importModules.then(([reducer, sagas, component]) => {
      injectReducer(name, reducer.default);
      injectSagas(sagas.default);
      renderRoute(component);
    });

    importModules.catch(errorLoading);
  });
  return routes.map(({ modulePath, path, name }) => (
    {
      path,
      name,
      getComponent(nextState, cb) {
        loadPage(modulePath, name, cb);
      },
    }
  ));
}
