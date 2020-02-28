import React, { useContext } from 'react';
import TreeNode from './TreeNode'
import { TreeContext } from '../context/Tree';

const TreeView = () => {
    let context = useContext(TreeContext);    
    return (        
    <>  
      <TreeNode node={context.tree} />
    </>
    );

}

export default TreeView;