const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
    newPassword: `${ROOTS.AUTH}/new-password`,
    verify: `${ROOTS.AUTH}/verify`,
  },

  // DASHBOARD

  dashboard: {
    root: ROOTS.DASHBOARD,
    calendar: `${ROOTS.DASHBOARD}/calendar`, // for example
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
    },
  },
};
