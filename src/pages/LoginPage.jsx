import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useAuth } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    if (currentUser) {
      navigate('/home');
    }
  }, [currentUser, navigate]);

  const handleEmailPasswordSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 text-white bg-gray-700 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-2 text-white bg-gray-700 rounded-md"
          />
          <button
            onClick={handleEmailPasswordSignIn}
            className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In with Email
          </button>
        </div>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-md hover:bg-red-600"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;