import React, { useState, useEffect } from 'react';
import { MemberArea } from './components/MemberArea';
import { Login } from './components/Login';
import { auth } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {user ? (
        <MemberArea user={user} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
