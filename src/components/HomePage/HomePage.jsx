import './HomePage.css';
import "../PieChart/PieChart.jsx"
import { Link } from 'react-router-dom'
import PieChart from '../PieChart/PieChart.jsx';


function HomePage(props) {

  let sum = 0
  for (let item of props.list) {
    sum += item.amount
  }
  sum = sum.toFixed(2)


  return (
    <div className="HomePage " >
      <section className="Pie">
      <h1>SUMMARY</h1>
        <PieChart list={props.list} calculateCategoryValues={props.calculateCategoryValues} />
        <div className="PieChart-buttons">
            <Link to="/list">
                <button className="btn btn-warning">View List</button>
            </Link>
            <Link to="/categories">
                <button className="btn btn-warning">Categories</button>
            </Link>
            </div>
      </section>
      <section className="HomePage-bottom">
        <h1>EXPENSES</h1>
        <div>
          <div className="HomePage-total">Total transactions</div>
          <div className="HomePage-amount">$ {sum}</div>
        </div>
        <Link to="/add">
          <button className="btn btn-warning">Add Expense</button>
        </Link>
      </section>
    </div>
  );
}
export default HomePage