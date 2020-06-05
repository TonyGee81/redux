import {createStore} from 'redux';

import userReducer from './reducers/users';

const store = createStore(userReducer);

export default store;