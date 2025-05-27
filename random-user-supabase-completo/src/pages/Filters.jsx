import { useState, useEffect } from 'react';

export default function Filters() {
  const [users, setUsers] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results.map(u => ({
          name: u.name.first + ' ' + u.name.last,
          country: u.location.country,
          avatar: u.picture.medium
        })));
      });
  }, []);

  const filtered = users.filter(u => u.country.toLowerCase().includes(country.toLowerCase()));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Filtrar por país"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
      {filtered.map((u, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <img src={u.avatar} className="w-10 h-10 rounded-full" />
          <div>
            <p>{u.name}</p>
            <p className="text-sm text-gray-500">{u.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
}