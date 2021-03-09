import React, {FC, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const CollapsibleDiv = styled.div`
    border-bottom: 2px solid black;
    width: 100%;
    padding-bottom: 5px;
`;

const CollapsibleDivContent = styled.div`    
    padding: 16px 16px;
    overflow: hidden;
    background-color: #f1f1f1;
`;

const Button = styled.button`
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    &:hover {
        background-color: #555;
    }
`

const Collapsible:FC<{}> = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <CollapsibleDiv>
      <Button
        type="button"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Close" : "Open"} Collapsible
        {toggle ? (
          <FaAngleDown className="fa" size={16} style={{float: "right"}} />
        ) : (
          <FaAngleRight className="fa" size={16} style={{float: "right"}} />
        )}
      </Button>
      {toggle && (                                                                                              
        <CollapsibleDivContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </CollapsibleDivContent>
      )}
    </CollapsibleDiv>
  );
}

export default Collapsible;