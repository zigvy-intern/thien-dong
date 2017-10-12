import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const ItemProgress = ({content}) => (
<ProgressBar now={70} label="60%"></ProgressBar>
);
export default ItemProgress;
