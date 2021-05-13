import { Link } from 'react-router-dom'
import './AddPage.css';


function AddPage(props) {
  return (
    <div className="AddPage">
      <section className="AddPage-layout">
        <h1>Add Expense</h1>
        <div className="AddPage-form">
          <h4>Description</h4>
          <input />
          <h4>Amount</h4>
          <input type="number" min="0" step="any" />
          <h4>Date</h4>
          <input type="date" />
          <h4>Choose category</h4>

        <div className="AddPage-btn-cat">
          <i className="fa fa-cart-arrow-down" />
          <i className="fa fa-home" />
          <i className="fa fa-coffee" />
          <i className="fa fa-cutlery" />
          <i className="fa fa-paw" />
          <i className="fa fa-heartbeat" />
          <i className="fa fa-book" />
          <i className="fa fa-phone" />
          <i className="fa fa-plane" />
          <i className="fa fa-music" />
          <i className="fa fa-gamepad" />
          <i className="	fa fa-wrench" />
        </div>

        </div>

        <div className="AddPage-btn">
          <button className="btn btn-warning">Add expense</button>
        </div>

      </section>

    </div>
  );
}
export default AddPage