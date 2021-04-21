import React from 'react';
import styles from './styles/ExampleComponent.module.css';
import { ExampleComponentProps } from './types';

const ExampleComponent: React.FC<ExampleComponentProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.examplecomponent}>{children}</div>
        </div>
    );
};

export default ExampleComponent;