import React, { useContext } from 'react';
import './TreeNode.css'
import { TreeContext } from '../context/Tree';

const TreeNode = (props) => {
    let childNodes;
    let className;
    let classVisible;
    const TOGGABLE = 'togglable';
    const TOGGABLEDOWN = ' togglable-down';
    const TOGGABLEUP = ' togglable-up';
    const VISIBLE = 'visible';
    const UNVISIBLE = 'unvisible';

    let context = useContext(TreeContext); 

    if (props.node.childNodes != null) {
        childNodes = props.node.childNodes.map(function(node, index) {
            return   <li key={index}> <TreeNode node={node} /></li>            
        });
      
        className = TOGGABLE;
        if (props.node.open) {
            className += TOGGABLEDOWN;
            
        } else {
            className += TOGGABLEUP;
        }
    } 

    props.node.open ? classVisible = VISIBLE : classVisible = UNVISIBLE;  

    return (        
        <>   
            <h5 onClick={()=>{context.toggleOneByOne(props.node, null)}} className={className}>
                {props.node.title} 
            </h5>
            <ul className={classVisible}>
                {childNodes}
            </ul>
        </>
    );

}

export default TreeNode;