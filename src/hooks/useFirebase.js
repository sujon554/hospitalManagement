import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Login/Firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();


    const signInUsingGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
        })
    }
    const signInWithGithub = () => {
        const githubProvider = new GithubAuthProvider()
        signInWithPopup(auth, githubProvider)
            .then(result => {
           setUser(result.user)
            })
           
    }
    
  const handleRegistraton = e => {
    console.log(email, password)
    e.preventDefault();
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
    
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    },[])
    
    const logOut = () => {
        signOut(auth)
        .then(() => { })
    }

// save users to mongoDB
const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch("https://frozen-waters-08113.herokuapp.com/users", {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then();
};



const registerUser = (email, password, name, history) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError("");
      // history.push(redirect_uri);
      const newUser = { email, displayName: name };
      setUser(newUser);

      // save user to the database
      saveUser(email, name, "POST");
      //update Profile
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {});
      history.replace("/");
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
};

const logInUser = (email, password, location, history) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || "/";
      history.replace(destination);
      setAuthError("");
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
};


    useEffect(() => {
      fetch(`https://frozen-waters-08113.herokuapp.com/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }, [user.email]);


    return {
        user,
        admin,
        logOut,
        signInUsingGoogle,
        signInWithGithub,
        isLoading,
        authError,
        registerUser,
        logInUser,
        handleRegistraton,
        handleEmailChange,
        handlePasswordChange
    }
};

export default useFirebase;