import React from 'react';
import { motion } from 'framer-motion';

import Search from './Search';

import '@styles/components/deals/DealHeader.scss';

interface Props {
  title: string;
  placeholder: string;
}

const fadeInBlock = {
  initial: {
    x: 25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const DealHeader = (props: Props) => {
  return (
    <div className="deal-header">
      <motion.div variants={fadeInBlock} className="deal-header-top">
        <h1>{props.title}</h1>
        {/* <Search placeholder={props.placeholder} /> */}
      </motion.div>
    </div>
  );
};

export default DealHeader;
