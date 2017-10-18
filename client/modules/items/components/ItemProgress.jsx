import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const ItemProgress = ({percentage}) => (
    <ProgressBar now={percentage} label="%(percentage)%"></ProgressBar>
);
export default ItemProgress;
