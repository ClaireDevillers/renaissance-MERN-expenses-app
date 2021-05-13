import './HomePage.css';
import "../PieChart/PieChart.jsx"
import { Link } from 'react-router-dom'
import PieChart from '../PieChart/PieChart.jsx';


function HomePage(props) {
  return (
    <div className="HomePage " >
      <section className="Pie">
      <h1>SUMMARY</h1>
        <PieChart />
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
          <div className="HomePage-amount">$ 12.04</div>
        </div>
        <Link to="/add">
          <button className="btn btn-warning">Add Expense</button>
        </Link>
      </section>
    </div>
  );
}
export default HomePage