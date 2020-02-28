import React, { useContext } from 'react';
import './TreeNode.css'
import { TreeContext } from '../context/Tree';

const CollapseExpand = () => {

let context = useContext(TreeContext);
return (
    <>
        <button onClick={() => {context.toggleColExp(context.stateBtn)}}>{context.buttonExCol}</button>        
    </>
);
}

export default CollapseExpand;