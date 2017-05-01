import path from 'path';
import express from 'express';

const staticPath = path.resolve(__dirname, '../../public');
const configure = () => {
    return express.static(staticPath);
}

export default configure;