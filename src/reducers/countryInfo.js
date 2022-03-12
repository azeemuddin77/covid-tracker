export default (state = [], action) => {
  switch (action.type) {
    case 'COUNTRY_INFO':
      return action.payload;
    default:
      return state;
  }
};
