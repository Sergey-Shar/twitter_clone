import compose from 'compose-function';

import { withRouter } from './withRouters';
export const withProviders = compose(withRouter);

