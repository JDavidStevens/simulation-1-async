import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './Homepage/Homepage';

import ShelfA from './Shelves/ShelfA';
import ShelfB from './Shelves/ShelfB';
import ShelfC from './Shelves/ShelfC';
import ShelfD from './Shelves/ShelfD';

import A_add from './Bins/BinA/A_add';
import InventoryA from './Bins/BinA/InventoryA';

import B_add from './Bins/BinB/B_add';
import InventoryB from './Bins/BinB/InventoryB';

import C_add from './Bins/BinC/C_add';
import InventoryC from './Bins/BinC/InventoryC';

import D_add from './Bins/BinD/D_add';
import InventoryD from './Bins/BinD/InventoryD';

export default <Switch>
<Route exact path='/' component={Homepage}/>
<Route path='/alpha' component={ShelfA}/>
<Route path='/bravo' component={ShelfB}/>
<Route path='/charlie' component={ShelfC}/>
<Route path='/delta' component={ShelfD}/>

<Route path='/aadd/:id' component={A_add}/>
<Route path='/ainventory/:id' component={InventoryA}/>

<Route path='/badd/:id' component={B_add}/>
<Route path='/binventory/:id' component={InventoryB}/>

<Route path='/cadd/:id' component={C_add}/>
<Route path='/cinventory/:id' component={InventoryC}/>

<Route path='/dadd/:id' component={D_add}/>
<Route path='/dinventory/:id' component={InventoryD}/>

</Switch>