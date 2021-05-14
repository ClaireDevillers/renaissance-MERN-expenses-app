import React from "react";
import './AddPage.css';

class AddPage extends React.Component {
  state = {
    description: "",
    amount: "",
    date: "",
    error: "",
    selectedCat: "Home"
  }

  changeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  send = async (event) => {
    event.preventDefault();
    try {
      let fetchResponse = await fetch("/api/expenses/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            description: this.state.description,
            amount: this.state.amount,
            date: this.state.date,
            category: this.state.selectedCat,
          })
        })

      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request")

      let newList = await fetchResponse.json()
      this.props.setList(newList)
      this.props.history.push('/list')

    } catch (err) {
      this.setState({ error: "Something went wrong - Try again!" })
    }
  }

  render() {
    return (
      <div className="AddPage">
        <section className="AddPage-layout">
          <h1>Add Expense</h1>
          <form onSubmit={this.send}>
          <div className="AddPage-form">

            <h4>Description</h4>
            <input required placeholder="Buying some CD's" onChange={this.changeInput} name="description" value={this.state.description} />

            <h4>Amount</h4>
            <input required placeholder="42.42" type="number" onChange={this.changeInput} name="amount" value={this.state.amount} />

            <h4>Date</h4>
            <input required type="date" onChange={this.changeInput} name="date" value={this.state.date} />

            <h4>Choose category</h4>

            <div className="AddPage-btn-cat">
              {this.props.categories && this.props.categories.map(cat => {
                const active = (cat.name === this.state.selectedCat) ? "active" : ""
                return <i 
                className={"fa " + cat.faIcon + " " + active}
                key={cat._id} 
                onClick={()=>this.setState({selectedCat: cat.name})}
                />
              })}
            </div>

          </div>

          <div className="AddPage-btn">
            <button className="btn btn-warning">Add expense</button>
          </div>
          </form>
          <div style={{color:"red"}}>
            {this.state.error}
          </div>

        </section>

      </div>
    );
  }
}
export default AddPage