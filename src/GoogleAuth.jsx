// import { useState, useEffect } from "react";
// import { auth } from "./firebase";
// import { useAuth } from "./firebase";
// import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// const GoogleAuth = () => {
//   const provider = new GoogleAuthProvider();

//   const [user, setUser] = useState(null);
//   const currentUser = useAuth();
//   useEffect(() => {
//     if (currentUser) {
//       setUser(currentUser);
//     } else {
//       setUser(null);
//     }
//   }, [currentUser]);
//   const handleGoogleSignIn = () => {
//     try {
//       signInWithPopup(auth, provider);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleGoogleSignOut = async () => {
//     try {
//       signOut(auth);
//       setUser(null);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Signed in as: {user.displayName}</p>
//           <img src={user.photoURL} alt="User avatar" />
//           <button onClick={handleGoogleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <button onClick={handleGoogleSignIn}>Sign In with Google</button>
//       )}
//     </div>
//   );
// };

// export default GoogleAuth;
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/google-login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Sign In with Google</h2>
        {user ? (
          <div>
            <p className="mb-4">Signed in as: {user.displayName}</p>
            <img src={user.photoURL} alt="User avatar" className="mb-4 rounded-full" />
            <button
              onClick={handleGoogleSignOut}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default GoogleAuth;