import React from "react"
import { InlineStyle } from "./components/InlineStyle";
import {CssModules} from "./components/CssModules";
import {StyledJsx} from "./components/StyledJsx"
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";

const App2=()=>{
    return(
        <>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        </>
    )
}

export default App2