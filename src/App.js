import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, 
        Route, 
        Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { collection, getDocs, doc, setDoc, addDoc, query, where } from "firebase/firestore"; 
import db from './firebase.config';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";



function App() {
  
	const [user, setUser] = useState({
		uid: null,
		email: null,
		activities: 0,
		experience: 0,
		name: "name",
		school: "",
		isLoggedIn: false,
	});

	const auth = getAuth();
	auth.languageCode = 'it';
	const googleProvider = new GoogleAuthProvider();
	const signIn = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			const u = res.user;
			const q = query(collection(db, "users"), where("uid", "==", u.uid));
			const docs = await getDocs(q);
			if (docs.docs.length === 0) {
				await addDoc(collection(db, "users"), {
					uid: u.uid,
					name: u.displayName,
					authProvider: "google",
					email: u.email
				});
			}
			setUser({...user, uid: u.uid, name: u.displayName, email: u.email, isLoggedIn: true});
		} catch (err) {
		console.error(err);
		alert(err.message);
		}
  	};


	useEffect(() => {
		console.log(user.isLoggedIn);
	})


  return (
    <Router>
        <div>
            <Navbar user={user} signIn={signIn} setUser={setUser}/>{/* signIn={signIn()} */}
            <Routes>
                <Route exact path="/" element={<Home user={user} />}/>
                <Route path="/Home" element = {<Home user={user}/>} />
                <Route path="/About" element = {<About user={user}/>} />
                <Route path="/Profile" element = {<Profile user={user}/>} />
                <Route path="/Login" element = {<Login user={user}/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
