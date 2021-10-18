import { initializeAuthentication } from "./Firebase/Google-Firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
 
initializeAuthentication();
 
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
 
function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
 
  const auth = getAuth();
 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // Show User Info in ui
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
 
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider).then((result) => {
      const { displayName, photoURL, email } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedInUser);
    });
  };
 
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      const { displayName, photoURL, email } = result.user;
      console.log(result.user);
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedInUser);
    });
  };
 
  const handleSignOut = () => {
    // Sign Out
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        setUser(error.message);
      });
  };
  const toggleLogin = (event) => {
    setIsLogin(event.target.checked);
  };
  const handlePassword = (event) => {
    setPass(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
 
  // Registration Section
  const handleRegister = (event) => {
    event.preventDefault();
    if (pass.length < 6) {
      setError("Password Must be 6 character long");
      return;
    }
    isLogin ? processLogin(email, pass) : registerNewUser(email, pass);
  };
 
  const processLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const registerNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setError("");
        verifyEmail();
        setUserName();
        console.log(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
    console.log(email, pass);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
 
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
 
  return (
    <div className="container mt-5">
      <form onSubmit={handleRegister}>
        <h3 className="text-primary">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        <div className="row mb-3">
          {!isLogin && (
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onBlur={handleNameChange}
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
            </div>
          )}
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        {
          <div>
            <ul>
              <li>{error}</li>
            </ul>
          </div>
        }
        <div className="col-auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck"
            />
            <label className="form-check-label" htmlFor="autoSizingCheck">
              Remember me
            </label>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Login" : "Register"}
        </button>
        <br />
        <button
          type="button"
          onClick={handleResetPassword}
          className="btn btn-secondary btn-sm"
        >
          Reset Password
        </button>
      </form>
 
      {!user.name ? (
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign in </button>
          <button onClick={handleGithubSignIn}>GitHub Sign in </button>
          <button onClick={handleFacebookSignIn}>Facebook Sign in </button>
        </div>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
      <br />
      {user.name && (
        <div>
          <h2>Welcome {user.name}</h2>
          <p>I know your email address: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}
 
export default App;
