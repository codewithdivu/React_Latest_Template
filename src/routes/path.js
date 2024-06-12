const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  ERROR: '/error',
};

export const paths = {
  // ERROR
  error: {
    400: `${ROOTS.ERROR}/400`,
    401: `${ROOTS.ERROR}/401`,
    403: `${ROOTS.ERROR}/403`,
    403: `${ROOTS.ERROR}/403`,
    500: `${ROOTS.ERROR}/500`,
  },

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
