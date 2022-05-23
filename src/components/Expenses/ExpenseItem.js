import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  // Function clickMeHandler(){}
  // const [title, setTitle] = useState(props.title);

  
  // const clickMeHandler = () => {
  //   setTitle('Updated!!')
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickMeHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
