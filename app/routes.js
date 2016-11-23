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
  { path: '/',          name: 'indexPage',      module: 'IndexPage' },
  { path: '/search',    name: 'searchPage',     module: 'Search' },
  { path: '/profile',   name: 'profile',        module: 'Profile' },
]
/* eslint-enable */
export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  const loadPage = ((module, cb) => {
    const importModules = Promise.all([
      System.import(`containers/${module}/reducer`),
      System.import(`containers/${module}/sagas`),
      System.import(`containers/${module}/index`),
    ]);

    const renderRoute = loadModule(cb);
    importModules.then(([reducer, sagas, component]) => {
      injectReducer(module, reducer.default);
      injectSagas(sagas.default);
      renderRoute(component);
    });

    importModules.catch(errorLoading);
  });
  return routes.map(({ module, path, name }) => (
    {
      path,
      name,
      getComponent(nextState, cb) {
        loadPage(module, cb);
      },
    }
  ));
}
