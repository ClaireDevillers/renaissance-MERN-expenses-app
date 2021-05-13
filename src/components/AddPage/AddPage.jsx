import React from "react";
import './AddPage.css';

class AddPage extends React.Component {
  state= {
    description:"",
    amount:"",
    date:"",
    category:"",
  }

  changeInput = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  send = async () => {
    let fetchResponse = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date,
        category: this.state.category,
      })
    })
    let response = await fetchResponse.json()
    console.log(response)
    this.props.history.push('/list')
  }
  
  render() {
    return (
      <div className="AddPage">
        <section className="AddPage-layout">
          <h1>Add Expense</h1>
          <div className="AddPage-form">

            <h4>Description</h4>
            <input onChange={this.changeInput} name="description" value={this.state.description} />

            <h4>Amount</h4>
            <input type="number" onChange={this.changeInput} name="amount" value={this.state.amount} />

            <h4>Date</h4>
            <input type="date" onChange={this.changeInput} name="date" value={this.state.date} />

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
            <button className="btn btn-warning" onClick={() => {this.send()}}>Add expense</button>
          </div>

        </section>

      </div>
    );
  }
}
export default AddPage