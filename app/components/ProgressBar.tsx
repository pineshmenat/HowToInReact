import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Progress = styled.div`
    height: 15px;
    width: 99%;
    background-color: lightgray;
    margin: 15px auto;
`;

interface ProgressBarDivProps {
    width: number
}

const ProgressBarDiv = styled.div<ProgressBarDivProps>`
    height: 15px;
    width: ${props => props.width}%;
    background-color: green;
    margin: 15px 0;
`;

const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
`;



const ProgressBar: FC<{}> = () => {
    const [width, setWidth] = useState<number>(5);
    const [run, setRun] = useState<boolean>(false);
    const timer = useRef<number|null>(null);
    useEffect(() => {
        timer.current = window.setInterval(() => {
            if(width === 100) {
                window.clearInterval(timer.current);
                setRun(false);
            } else if(run) setWidth(width+1);
        }, 10);
        return () => {clearInterval(timer.current);}
    },[width, run]);
    return(
        <Progress>
            <ProgressBarDiv width={width}/>
            <Button
                onClick={() => {setRun(true); setWidth(0);}}
            >Run</Button>
        </Progress>
    )
}

export default ProgressBar;