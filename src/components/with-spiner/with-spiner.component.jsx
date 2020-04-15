import React from 'react';

import {
    SpinerOverlay,
    SpinerContainer
} from './with-spiner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinerOverlay>
                <SpinerContainer/>
            </SpinerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    }
    return Spinner;
};

export default WithSpinner;