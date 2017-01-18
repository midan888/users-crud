import {browserHistory} from 'react-router';

class Router {

    static redirectTo(path) {
        browserHistory.push(path);
    }
}

export default Router;