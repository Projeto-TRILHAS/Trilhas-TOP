import React from "react";

const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  let { nome, descricao ,puntuacion, id } = element;

  return (
    <tr>
      <td>{nome}</td>
      <td>{descricao}</td>
      <td>{puntuacion}</td>
      <td>
        <button style={{backgroundColor:"blue"}} onClick={() => setDataToEdit(element)}>Like</button>
        <button style={{backgroundColor:"red"}}onClick={() => deleteData(id)}>Dislike</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
