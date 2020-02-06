import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'https://api.github.com/users/emilianocarvalho/repos'
    );
    const data = await response.json();

    setRepositories(data);
  }, []); // array vazio vai indicar que ele execute apenas uma única vez

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}
