// // EmailPasswordAuth.js
// import { useState, useEffect } from "react";
// import { auth } from "./firebase";
// import { useAuth } from "./firebase";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// const EmailPasswordAuth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const currentUser = useAuth();

//   useEffect(() => {
//     if (currentUser) {
//       setUser(currentUser);
//     } else {
//       setUser(null);
//     }
//   }, [currentUser]);

//   const [user, setUser] = useState(null);

//   const handleSignIn = async () => {
//     try {
//       const userCredential = signInWithEmailAndPassword(auth, email, password).catch(
//         (error) => {
//           console.log(error);
//         }
//       );
//       setUser(userCredential.user);
//       // Handle successful sign-in
//     } catch (error) {
//       // Handle sign-in error
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       signOut(auth);
//       setUser(null);
//       // Handle successful sign-out
//     } catch (error) {
//       // Handle sign-out error
//     }
//   };

//   console.log(user);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Signed in as: {user.email}</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleSignIn}>Sign In</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmailPasswordAuth;
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const EmailPasswordAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleSignOut = async () => {
    try {
      signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Sign In with Email</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 text-white bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 text-white bg-gray-700 rounded-md"
        />
        <button
          onClick={handleSignIn}
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default EmailPasswordAuth;