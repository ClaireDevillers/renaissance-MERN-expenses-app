import { Link } from 'react-router-dom'
import "./CategoriesPage.css"
import PieChart from '../PieChart/PieChart.jsx';


function CategoriesPage(props) {
  return (
    <div className="CatPage">
      <section className="CatPage-layout">
        <h1>By category</h1>
        <PieChart />
        <table>
          <thead className="CatPage-thead">
            <tr>
              <th>Label</th>
              <th>Category</th>
              <th>%</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="fa fa-home" /></td>
              <td>Home</td>
              <td>30%</td>
              <td>$300</td>
            </tr>
            <tr>
              <td><i className="fa fa-home" /></td>
              <td>Home</td>
              <td>30%</td>
              <td>$300</td>
            </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
}
export default CategoriesPage