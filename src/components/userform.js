import React, {useState} from 'react';

const UserForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        if (name === '') {
            alert('Please enter your name');
        } else if (email === '') {
            alert('Please enter your email');
        } else if (password === '') {
            alert('Please enter your password');
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters');
        } else {
            alert('Form submitted successfully');
        }
    }

    return (
        <div>
            <form>
                <div>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
                </div>
                <div>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Enter your email"/>
                </div>
                <div>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                </div>
                <button type="submit" onClick={validateForm}>Submit</button>

            </form>
        </div>
    )
}

export default UserForm;