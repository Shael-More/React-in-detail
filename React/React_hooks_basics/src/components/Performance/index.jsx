import React, { useState } from 'react';
import { data } from '../../data';
import List from './List';
import Counter from './Counter';

function LowerState() {
  const [people, setPeople] = useState(data);
  

  return <section>
    <Counter />
    <List people={people}/>
  </section>;
}

export default LowerState;
