import { useState } from 'react'
import "./ListPage.css"


function ListPage(props) {
  const [error, setError] = useState("")

  async function deleteItem(id) {
    try {
      const fetchResponse = await fetch('/api/expenses/' + id, {
        method: 'DELETE'
      })
      let newList = await fetchResponse.json()
      props.setList(newList)
    } catch (err) {
      setError("Something went wrong")
    }
  }

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
            { props.list.length ?
            props.list.map(item => <tr key={item._id}>
              <td>{item.date && item.date.substr(0, 10)}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td><i className="fa fa-remove" onClick={() => { deleteItem(item._id) }} /></td>
            </tr>)
          :
          <tr><td colSpan="4">Add some expenses!</td></tr>
          }
          </tbody>
        </table>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",color:"red"}}>
          {error}
        </div>
      </section>
    </div>
  );
}
export default ListPage