import React from "react";
import CrudTableContacsRow from "./CrudTableContacsRow";

const CrudTableContacs = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Trilhas</h3>
      <table>
        <thead style={{backgroundColor:"lightskyblue"}}>
          <tr>
            <th>Nome</th>
            <th>descricao</th>
            <th>Puntos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => (
              <CrudTableContacsRow
                key={element.id}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Não há dados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTableContacs;
