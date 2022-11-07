import React from "react";
import {useState} from "react";

type List1Props = {
  // TODO
  initialValues:Array<number>;
  label:string;
};
const List1 = (props: List1Props) => {
  
  const {label, initialValues} = props;
  const {List, setList} = useState(initialValues)

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      {list.map((elem,index)=>
      <div data-testid="list1-element">{elem}</div>
)}

      
      <input data-testid="list1-input" />
      <button data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end">
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
