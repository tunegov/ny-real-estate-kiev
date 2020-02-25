// #region Global Imports
import nextRoutes from 'next-routes';
// #endregion Global Imports

const routes = new nextRoutes();

routes.add('home', '/');
routes.add('team', '/team');
routes.add('services', '/services');
routes.add('services/:sid', '/services');
routes.add('deals/:did', '/deals');
routes.add('deals/view/:id', '/deals/view');
routes.add('jobs', '/jobs');
routes.add('partners', '/partners');
routes.add('contacts', '/contacts');

routes.add('*', '/');

export const Link = routes.Link;

export default routes;
