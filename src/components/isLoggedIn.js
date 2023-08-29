import { LS } from '../utils/localStorageUtils.js';
 
let token = LS.get('token')
    
const isLoggedIn = () => {
  return token;
};

export default isLoggedIn