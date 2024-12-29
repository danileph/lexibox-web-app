import { ROUTES } from '@/shared/consts/routes';
import { RouteConfig } from '@/shared/types/routeTypes';

export const routeConfig: Record<(typeof ROUTES)[keyof typeof ROUTES], RouteConfig> = {
  [ROUTES.home]: {
    applyRuleForAllChildPaths: false,
    protected: true,
  },
  [ROUTES.signIn]: {
    applyRuleForAllChildPaths: true,
    protected: false,
  },
  [ROUTES.signUp]: {
    applyRuleForAllChildPaths: true,
    protected: false,
  },
  [ROUTES.search]: {
    applyRuleForAllChildPaths: false,
    protected: true,
  },
};
