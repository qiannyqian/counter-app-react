import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Counter = ({ count, setCount }) => {
  // console.log(props);

  // You can do this for destructuring if you declare the param props above
  //const { count, setCount } = props;

  // Stateful component
  // const [count, setCount] = useState(0);
  // const incrementCount = value => setCount(count => count + value);
  // const decrementCount = value => setCount(count => count - value);

  return (
    <div style={{ display: 'flex', margin: '48px 0' }}>
      <Button buttonLabel="-4" onClick={() => setCount(-4)} />
      <Button buttonLabel="-2" onClick={() => setCount(-2)} />
      <Button buttonLabel="-" onClick={() => setCount(-1)} />
      <div style={{ margin: '0 24px' }}>Count: {count}</div>
      {/* <Button buttonLabel="+" onClick={() => incrementCount(1)} /> */}
      <Button buttonLabel="+" onClick={() => setCount(1)} />
      <Button buttonLabel="+2" onClick={() => setCount(2)} />
      <Button buttonLabel="+4" onClick={() => setCount(4)} />
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default Counter;
