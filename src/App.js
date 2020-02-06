import React, { useState } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
    { id: 4, name: 'repo-4' },
    { id: 5, name: 'repo-5' }
  ]);

  function handleAddRepo() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: 'Novo repo' }
    ]);
  }
  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.id} - {repo.name}
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepo}>Adicionar Repo</button>
    </>
  );
}
