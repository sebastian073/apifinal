import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Inicio de sesión exitoso");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Iniciar Sesión</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}