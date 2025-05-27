import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        const simplified = data.results.map(u => ({
          name: u.name.first + ' ' + u.name.last,
          email: u.email,
          country: u.location.country,
          age: u.dob.age,
          avatar: u.picture.medium
        }));
        setUsers(simplified);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Usuarios Aleatorios</h1>
      <ul>
        {users.map((u, idx) => (
          <li key={idx} className="my-2 flex gap-2 items-center">
            <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full" />
            <div>
              <p>{u.name}</p>
              <p className="text-sm text-gray-500">{u.country}</p>
            </div>
          </li>
        ))}
      </ul>
      <BottomNav />
    </div>
  );
}