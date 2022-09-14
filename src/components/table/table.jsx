import React from 'react';
import convertDate from '../../utils/convertDate';

const Table = ({ filteredPatients }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Procedimento</th>
          <th>valor Parcela</th>
          <th>Data Pagamento</th>
        </tr>
      </thead>
      <tbody>
        {filteredPatients.length > 0 &&
          filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.procedure}</td>
              <td>R$: {patient.parcelValue}</td>
              <td>{convertDate(patient.date, true)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
