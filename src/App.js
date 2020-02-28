import React from 'react';
import CollapseExpand from './component/CollapseExpand';
import TreeView from './component/TreeView';
import {TreeContextProvider} from './context/Tree';

const App = () => {  
  return (
    <TreeContextProvider>
      <CollapseExpand />
      <TreeView />
    </TreeContextProvider>
  );
}


export default App;