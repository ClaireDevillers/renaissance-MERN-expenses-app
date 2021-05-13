import './HomePage.css';
import "../PieChart/PieChart.jsx"
import { Link } from 'react-router-dom'
import PieChart from '../PieChart/PieChart.jsx';


function HomePage(props) {
  return (
    <div className="HomePage" >
      <PieChart />
      <section className="HomePage-bottom">
        <h1>EXPENSES</h1>
        <div>
          <div className="HomePage-total">Total transactions</div>
          <div className="HomePage-amount">$ 12.04</div>
        </div>
        <button className="btn btn-warning">Add Expense</button>
      </section>
    </div>
  );
}
export default HomePage