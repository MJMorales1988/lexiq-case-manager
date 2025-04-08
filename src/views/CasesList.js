import React from 'react';

const cases = [
  { id: 1, name: 'Case 1' },
  { id: 2, name: 'Case 2' },
  { id: 3, name: 'Case 3' },
];

function CasesList() {
  return (
    <div>
      <h2>Cases List</h2>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>{caseItem.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CasesList;