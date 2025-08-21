import { useMemo, useContext } from 'react';
import Calculation from './Calculation';
import styles from './Calculator.module.css';
import { OperandContext } from './context/OperandContext';

function Calculator() {
  const { operand } = useContext(OperandContext);
  const numericOperand = Number(operand) || 0;


  const addOne = useMemo(() =>  numericOperand + 1, [numericOperand]);
  const cubed = useMemo(() => numericOperand ** 3, [numericOperand]);
  const multiplyByThree = useMemo(() => numericOperand * 3, [numericOperand]);
  const squareRoot = useMemo(() => numericOperand >= 0 ? Math.sqrt(numericOperand) : 'Invalid', [numericOperand]);
  

  return (
    
      <ul className={styles.calculatorList}>
        <Calculation result={addOne} title="Add 1" />
        <Calculation result={cubed} title="Cubed" />
        <Calculation result={multiplyByThree} title="Multiply by 3" />
        <Calculation result={squareRoot} title="Square Root" />
      </ul>
    
  );
}

export default Calculator;
