import styled from "styled-components";

export const HeaderWrapper = styled.div`
    .content {
        height: 50px;
        background-color: cyan;
        
        ${(props) => props.theme.mixin.wrapv1}
    }

`

