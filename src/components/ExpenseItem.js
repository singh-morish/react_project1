// in jxs we must have only one root element
import "./ExpenseItem.css";
// function ExpenseItem() {
//   // return <h2>ExpenseItem!</h2>




//   /*
//   passing the varaible/const value to be printed
//   const expenseDate = new Date(2021, 2, 28);
//   const expenseTitle = "car insurance";
//   const expenseAmount = 234.21;

//   return (
//     <div className='expense-item'>
//         // {outputting date object it to string by converting }
//       <div>{expenseDate.toISOString()}</div>  
//       <div className='expense-item__description'>
//         <h2>{expenseTitle}</h2>
//         <div className='expense-item__price'>{expenseAmount}</div>
//       </div>
//     </div>
//   );
// */ 



// /* hard coding the detail
// return (
//   <div className='expense-item'>
//   <div>march 24</div>
//   <div className='expense-item__description'>
//   <h2>Car insurance</h2>
//   <div className='expense-item__price'>234.23</div>
//   </div>
//   </div>
//   );
//   */
 
 
 

// }

// export default ExpenseItem;


//   // using the props concept to change the content, passing all the data to be used in App.js

function ExpenseItem(props) {

  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  return (
    <div className='expense-item'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      {/* <div>{props.date.toISOString()}</div>   */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
