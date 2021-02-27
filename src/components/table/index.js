import React from "react";

function Table(props) {
return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Picture</th>
      <th scope="col">Cell Number</th>
    </tr>
  </thead>
  <tbody>
      {console.log(props.people)}
      {props.people.length > 0 ? props.people.map(person => {
          return (
            <tr>
            <th scope="row">{person.name.first}</th>
            <td>{person.name.last}</td>
            <td><img src={person.picture.thumbnail} /></td>
            <td>{person.cell}</td>
          </tr>
          )
      }) : 
       <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>}
   
    
  </tbody>
</table>
)
}

export default Table