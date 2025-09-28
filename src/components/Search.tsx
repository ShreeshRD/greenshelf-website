"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Search.module.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`d-flex ${styles.searchForm}`}>
      <input
        type="search"
        className={`form-control ${styles.searchInput}`}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={`btn ${styles.searchButton} ms-2`}>Search</button>
    </form>
  );
};

export default Search;