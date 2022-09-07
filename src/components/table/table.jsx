import React from 'react';

const Table = ({ filteredPatients }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>valorParcela</th>
          <th>DataPagamento</th>
        </tr>
      </thead>
      <tbody>
        {filteredPatients.length > 0 &&
          filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.parcelValue}</td>
              <td>{patient.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
