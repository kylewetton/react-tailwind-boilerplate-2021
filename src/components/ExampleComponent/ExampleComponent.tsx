import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ExampleComponent.module.css';
import { ExampleComponentProps } from './types';

const ExampleComponent: React.FC<ExampleComponentProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.examplecomponent}>{children}</div>
        </div>
    );
};

ExampleComponent.propTypes = {
    children: PropTypes.any
}

export default ExampleComponent;