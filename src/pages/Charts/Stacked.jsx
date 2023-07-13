import React from 'react';

import {Stacked as StackedChart } from '../../components';
import {Header} from '../../components';



const Stacked = () => {
  
  return(
  
    <div className='m04 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Stacked' title='Revenue Breakdown'/>
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
 )}
;

export default Stacked;