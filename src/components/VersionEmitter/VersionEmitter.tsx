import '../../index.css';
import React from 'react';
import styles from './styles/VersionEmitter.module.css';
import { VersionEmitterProps } from './types';
const pack = require('../../../package.json');

const VersionEmitter: React.FC<VersionEmitterProps> = () => {

    const {version} = pack;
    return (
        <span className={styles.versionEmitter}>{version}</span>
    );
};

export default VersionEmitter;