import React from "react";
import styled from 'styled-components';
import './Hello.css'

function Hello() {
    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue'
    };
    const StyledButton = styled.button`
        color:red;
        background-color: gray;
    `
    return (
        <>
            <div className='red'> Hello World! </div>
            <div style={PracticeStyle}>Hello Wolrd!</div>
            <StyledButton>나만의 버튼</StyledButton>
        </>
    );
}

export default Hello;