import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import ShelfA from './Shelves/ShelfA';
import ShelfB from './Shelves/ShelfB';
import ShelfC from './Shelves/ShelfC';
import ShelfD from './Shelves/ShelfD';
import A_add from './Bins/BinA/A_add';

export default <Switch>
<Route exact path='/' component={Homepage}/>
<Route path='/alpha' component={ShelfA}/>
<Route path='/bravo' component={ShelfB}/>
<Route path='/charlie' component={ShelfC}/>
<Route path='/delta' component={ShelfD}/>
<Route path='/aadd' component={A_add}/>

</Switch>