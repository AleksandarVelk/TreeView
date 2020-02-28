import React, {useState} from 'react';

const TreeContext = React.createContext();

const TreeContextProvider = (props) => {
    let json = {
        id: 'root',
        title: "Food",
        open: false,
        childNodes: [
          {        
            title: "Stack",
            open: false,
            childNodes: [
              {
                title: "Pork"
              }, 
              {
                title: "Chicken"
              }, 
              {
                title: "Bref meat"
              }
    
            ]
          },
          {
            title: "Мinced meat",
            open: false,
            childNodes: [
              {
                title: "Pork",
                open: false,
                childNodes: [
                  {
                    title: "Fat"
                  }, 
                  {
                    title: "Fat-medium"
                  }, 
                  {
                    title: "Fat-light"
                  }
    
                ]
              },
              {
                title: "Chicken"
              }
            ]
          }
        ]
      };

    let [tree, changeTreeItems] = useState(json);
    const COLAPSEALL = 'COLAPSE ALL';
    const EXPANDALL = 'EXPAND ALL';
    let [buttonExCol, setbuttonExCol] = useState(EXPANDALL);  
    let [stateBtn, setstateBtn] = useState(false);
    let objCopy = Object.assign({}, tree);
    

    const toggleColExp = (state) => {  
        setbuttonExCol(
            !state  ? COLAPSEALL : EXPANDALL
        );        
        tree.open = !state;
        setupStateAllNodes(tree, state); 
    }

    function setupStateAllNodes (tree, state) {
        tree.childNodes.map(function(node, index) {
            if(node.childNodes){
                node.open = !state;
                setstateBtn(!state);
                setupStateAllNodes(node, state);
            }
        });
    }

    const toggleOneByOne = (item, childNodesArray = null) => {
       
        toggleOne(item, childNodesArray);

        if(item.id === objCopy.id){
            objCopy.open = !item.open;
            if(objCopy.open){
                setbuttonExCol(COLAPSEALL);
                setstateBtn(true);
               
            }else if(!objCopy.open){   
                setbuttonExCol(EXPANDALL);
                setstateBtn(false);
                } 
        }        
        changeTreeItems(objCopy);
    }    

    const toggleOne = (item, childNodesArray = null) => {
        let newObj = {};
        if(childNodesArray){
            newObj = childNodesArray;
        } else {
            newObj = objCopy;
        }

        newObj.childNodes.map(function(node, index) {
            if (node.childNodes != null) {
              if(node === item){
                node.open = !item.open;
              }
            toggleOne(item, node);
        }});
    
    }

    return (
        <TreeContext.Provider 
            value={{buttonExCol: buttonExCol, toggleColExp: toggleColExp, stateBtn: stateBtn, tree: tree, toggleOneByOne: toggleOneByOne}}
        >
            {props.children}
        </TreeContext.Provider>
    );
}


export {
    TreeContextProvider, 
    TreeContext
}
