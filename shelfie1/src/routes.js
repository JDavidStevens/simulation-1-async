import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import Shelf from './Shelves/Shelf';


import Add from './Bins/add';
import Inventory from './Bins/Inventory';

export default <Switch>
<Route component={Homepage} exact path='/'/>
<Route component={Shelf} path='/shelf/:shelf'/>
<Route component={Inventory} path='/inventory/:shelf/:bin'/>
<Route component={Add} path= '/add/:shelf/:bin'/>
</Switch>



