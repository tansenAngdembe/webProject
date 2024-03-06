const createEle  =(elements)=>{
    let elementType = document.createElement(elements)
    return elementType    
}
const create_text_node = (elements)=>{
    let elementsText = document.createTextNode(elements)
    return elementsText
}
export {createEle,create_text_node}

