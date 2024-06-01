import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function LoginForm() {

    // component is stateful
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();

    // copy pasta from lecture notes
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
    }

    const handleUserEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }


    {/* if the user is already logged in, show msg instead of form */ }
    if (currentUser.email) return (
        <><p>Welcome {currentUser.email}!</p>
            <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );

    return (
        <div className="LoginForm componentBox">
            <label>Email: {/* form inputs with similar props */}
                <input value={userEmail} onChange={handleUserEmailChange} />
            </label>
            <label>Password: {/* form inputs with similar props */}
                <input value={userPassword} onChange={handleUserPasswordChange} />
            </label>
            <button onClick={handleSubmit}>Login</button>
            <p>{submitResult}</p>
        </div>
    )
}