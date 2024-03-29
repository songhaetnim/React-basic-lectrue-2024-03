import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [evals, setEvals] = useState('')

  const a = (event) =>{
    event.preventDefault();
    setEvals(evals+event.target.value)
  }

  const b = (event) => {
    event.preventDefault();
    let sum = eval(evals)
    setEvals(sum);
  }

  const c = (event) => {
    event.preventDefault();
    setEvals('')
  }

  const handleChange = (event) => {
    setEvals(event.target.value)
  }

  return (
    <form onSubmit={b}>
        <table>
            <tr>
                <td colspan="4">
                  <input type="text" name="evals" value={evals} onChange={handleChange}/>
                  <button className='abcd'></button>
                </td>
            </tr>
            <tr>
                <td><button type="submit" name="op" value="C" onClick={c}>C</button></td>
                <td><button type="submit" name="op" value="/" onClick={a}>÷</button></td>
                <td><button type="submit" name="op" value="*" onClick={a}>×</button></td>
                <td><button type="submit" name="op" value="-" onClick={a}>－</button></td>
            </tr>
            <tr>
                <td><button type="submit" name="num" value="7" onClick={a}>7</button></td>
                <td><button type="submit" name="num" value="8" onClick={a}>8</button></td>
                <td><button type="submit" name="num" value="9" onClick={a}>9</button></td>
                <td rowspan="2"><button type="submit" name="op" value="+" onClick={a}>＋</button></td>
            </tr>
            <tr>
                <td><button type="submit" name="num" value="4" onClick={a}>4</button></td>
                <td><button type="submit" name="num" value="5" onClick={a}>5</button></td>
                <td><button type="submit" name="num" value="6" onClick={a}>6</button></td>
            </tr>
            <tr>
                <td><button type="submit" name="num" value="1" onClick={a}>1</button></td>
                <td><button type="submit" name="num" value="2" onClick={a}>2</button></td>
                <td><button type="submit" name="num" value="3" onClick={a}>3</button></td>
                <td rowspan="2"><button type="submit" name="op" value="=">＝</button></td>
            </tr>
            <tr>
                <td colspan="3"><button type="submit" name="num" value="0" onClick={a}>0</button></td>
            </tr>
        </table>
    </form>
  );
}