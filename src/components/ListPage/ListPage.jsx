import { Link } from 'react-router-dom'
import "./ListPage.css"


function ListPage(props) {
  return (
    <div className="ListPage">
      <section className="ListPage-layout">
        <h1>Expenses list</h1>
        <table>
          <thead className="ListPage-thead">
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>restaurant</td>
              <td>$100</td>
              <td><i className="fa fa-remove" /></td>
            </tr>
            <tr>
              <td>February</td>
              <td>music</td>
              <td>$80</td>
              <td><i className="fa fa-remove" /></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default ListPage