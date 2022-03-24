import styled from "styled-components";

const SInput=styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`

export const Input=(props)=>{
    const {placeholder=""}=props
    return <SInput type="text" placeholder={placeholder} />
}