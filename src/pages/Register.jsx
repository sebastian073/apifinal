import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Registro exitoso, revisa tu correo");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Registro</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}