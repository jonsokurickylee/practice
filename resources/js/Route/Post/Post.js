import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.p`
    font-family: 'YanoljaYacheR';
`;

export default class Post extends Component {
    render() {
        return (
            <div>
                <Test>post</Test>
            </div>
        );
    }
}
