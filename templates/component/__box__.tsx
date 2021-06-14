import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/__box__.module.css';
import { __box__Props } from './types';

const __box__: React.FC<__box__Props> = ({children}) => {
    return (
        <div className={styles._l_box_l_}>{children}</div>
    );
};

__box__.propTypes = {
    children: PropTypes.any
}

export default __box__;