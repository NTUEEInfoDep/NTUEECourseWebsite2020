const initialState = {
  session: {
    isLogin: false,
    studentID: "",
    initialized: false,
  },
  course: {},
  selection: {},
  ui: {
    isLoading: false,
    selectedGrade: 1,
    loginError: false,
    systemNotOpen: false,
    start: {},
    end: {},
  },
};

export default initialState;
