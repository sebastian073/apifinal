import { useState, useEffect } from 'react';

export default function Compare() {
  const [users, setUsers] = useState([]);
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => {
        const simplified = data.results.map((u, idx) => ({
          id: idx,
          name: u.name.first + ' ' + u.name.last,
          age: u.dob.age,
          country: u.location.country,
          avatar: u.picture.medium
        }));
        setUsers(simplified);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Comparar Usuarios</h2>
      <div className="flex justify-between gap-4 mb-4">
        <select onChange={(e) => setLeft(users.find(u => u.id == e.target.value))}>
          <option>Seleccionar usuario 1</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
        <select onChange={(e) => setRight(users.find(u => u.id == e.target.value))}>
          <option>Seleccionar usuario 2</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>
      {left && right && (
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <img src={left.avatar} className="mx-auto rounded-full w-20" />
            <p className="font-bold">{left.name}</p>
            <p>{left.age} años</p>
            <p>{left.country}</p>
          </div>
          <div className="text-center">
            <img src={right.avatar} className="mx-auto rounded-full w-20" />
            <p className="font-bold">{right.name}</p>
            <p>{right.age} años</p>
            <p>{right.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}