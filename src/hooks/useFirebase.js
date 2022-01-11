import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialization";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [adminLoading, setAdminLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    fetch(`https://sleepy-shore-83397.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
        // setAdminLoading(false)
      });
  }, [user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://sleepy-shore-83397.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return { user, admin, signInWithEmail, registerUser, authError, signInWithGoogle, logOut, isLoading, setIsLoading, error, setError, message, setMessage };
}

export default useFirebase;