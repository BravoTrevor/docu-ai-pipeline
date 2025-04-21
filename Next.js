// app/search/page.tsx
export default function SearchPage() {
  const [results, setResults] = useState<Document[]>([]);
  
  const handleSearch = async (query: string) => {
    const response = await fetch('/api/query', {
      method: 'POST',
      body: JSON.stringify({ query })
    });
    setResults(await response.json());
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ResultsList documents={results} />
    </div>
  );
}