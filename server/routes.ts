// #region Global Imports
const nextRoutes = require('next-routes');
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add('home', '/');
routes.add('team', '/team');
routes.add('services', '/services');
routes.add('services/:sid', '/services');
routes.add('jobs', '/jobs');
routes.add('partners', '/partners');
routes.add('contacts', '/contacts');

export default routes;
