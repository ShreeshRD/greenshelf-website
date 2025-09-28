"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="text-center">
      <h1 className="display-4 fw-bold">Nature, Engineered.</h1>
      <p className="lead">Discover the future of sustainable living.</p>
      <div className="col-lg-6 mx-auto">
        <form onSubmit={handleSearch} className={`d-flex ${styles.searchForm}`}>
          <input
            type="search"
            className={`form-control ${styles.searchInput}`}
            placeholder="Search for antibodies, reagents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={`btn ${styles.searchButton} ms-2`}>Search</button>
        </form>
      </div>
    </div>
  );
}