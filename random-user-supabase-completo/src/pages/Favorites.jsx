import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from('favorites')
        .select('favorite_id, users (name, email, avatar, country)')
        .eq('user_id', (await supabase.auth.getUser()).data.user.id);

      if (!error) {
        setFavorites(data.map(f => f.users));
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Favoritos</h1>
      {favorites.map((u, idx) => (
        <div key={idx} className="flex gap-2 items-center mb-2">
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