import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/emilianocarvalho/repos'
      );
      const data = await response.json();
      setRepositories(data);
    }

    fetchData();
  }, []); // Component Did Mount, vazio executa apenas uma vez

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Voce tem ${filtered.length} favorites`;
  }, [repositories]); // Compoment Did Update

  function handleFavorite(id) {
    const newRepo = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepo);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name} &nbsp;
            {repo.favorite && <span>(Favorite)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
          </li>
        ))}
      </ul>
    </>
  );
}
