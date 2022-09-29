import { Progress } from 'shared/ui/progress/Progress';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';


export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<Progress/>}>
      {component()}
    </Suspense>
  </BrowserRouter>
);