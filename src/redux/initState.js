const initState = {
  auth: {
    token: localStorage.getItem('token'),
    user: null,
    authenticated: false,
    loading: true,
    errorMessage: null,
  },
  category: {
    list: null,
    loading: false,
    errorMessage: null,
  },
  product: {
    data: null,
    loading: false,
    errorMessage: null,
  },
};

export default initState;
