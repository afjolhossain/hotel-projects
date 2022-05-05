import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/login/login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");

  //   --------------------RegisterUser--------------------------
  const registerUser = (email, password, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
      })

      .catch((error) => {
        setAuthError(error.message);
        navigate("/");
      })
      .finally(() => setIsloading(false));
  };

  //   --------------------LoginUser--------------------------

  const loginUser = (email, password, location, navigate) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  //   --------------------Google Authenticatin--------------------------

  const signInGoogle = (location, navigate) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
        const user = result.user;
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  //   --------------------Observer User State--------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);
  //   -------------------- User LogOut--------------------------

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsloading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInGoogle,
    logOut,
  };
};
export default useFirebase;
