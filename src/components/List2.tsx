import React from "react";
import {useState} from "react";
type List2Props = {
  // TODO
  initialValues:Array<number>;
  label:string;
};
const List2 = (props: List2Props) => {
  
  const {label,initialValues} = props;
  const [list,setList] = useState(initialValues)

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      {list.map((elem,index)=>
      <div key={index} data-testid="list2-element">{elem}</div>
      )}
      <input data-testid="list2-input" />
      <button data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}
      Append End
      </button>
      <button data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}
      Pop Start
      </button>
      <button data-testid="list2-btn-clear">
        {/* Button to  clear the list */}
      Clear
      </button>
      <button data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
