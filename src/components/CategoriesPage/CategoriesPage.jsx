import "./CategoriesPage.css"
import PieChart from '../PieChart/PieChart.jsx';

function CategoriesPage(props) {

  let catValues = props.calculateCategoryValues(props.list)
  let catData = addLabelsPercentsTotals(catValues, props.categories)

  return (
    <div className="CatPage">
      <section className="CatPage-layout">
        <h1>By category</h1>
        <PieChart list={props.list} calculateCategoryValues={props.calculateCategoryValues} />
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
            {catData && catData.map((obj,i) => <tr key={i}>
              <td><i className={"fa " + obj.label} style={{color: obj.color}} /></td>
              <td>{obj.title}</td>
              <td>{obj.percent}</td>
              <td>{obj.value}</td>
            </tr>)}
          </tbody>
        </table>

      </section>
    </div>
  );
}

function addLabelsPercentsTotals(catValues, cats) {
  if (!catValues.length) return []
  let total = catValues.reduce((prev, cur) => {return cur.value + prev}, 0)
  for (let i=0; i < catValues.length; i++) {
    catValues[i]["percent"]= (catValues[i].value / total * 100).toFixed(2)
    catValues[i]["label"]= getLabelFromName(catValues[i].title, cats)
  }
  return catValues
}

function getLabelFromName(name, catsList) {
  for(let cat of catsList) {
    if (cat.name === name) return cat.faIcon
  }
  return "fa-home"
}

export default CategoriesPage