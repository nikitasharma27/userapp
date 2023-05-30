import React, {useState} from 'react';

const UserForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        if (name === '') {
            alert('Please enter your name');
            return
        } else if (email === '') {
            alert('Please enter your email');
            return
        } else if (password === '') {
            alert('Please enter your password');
            return
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return
        }

        let countUpperCase = 0, countLowerCase = 0, countDigit = 0, countSpecialCharacters = 0;
        const specialChars = [
            '!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','<','>'
        ]

        for (let i = 0; i < password.length; i++) {
            if (specialChars.includes(password[i])) {
                countSpecialCharacters++;
            } else if (!isNaN(password[i] * 1)) {
                countDigit++;
            } else if (password[i] == password[i].toUpperCase()) {
                    countUpperCase++;
            } else if (password[i] == password[i].toLowerCase()) {
                    countLowerCase++;
            }
        }

        if (countLowerCase == 0) {
        alert('Invalid Form, 0 lower case characters in password')
        return
        }

        if (countUpperCase == 0) {
        alert('Invalid Form, 0 upper case characters in password')
        return
        }

        if (countDigit == 0) {
        alert('Invalid Form, 0 digit characters in password')
        return
        }

        if (countSpecialCharacters == 0) {
        alert('Invalid Form, 0 special characters in password')
        return
        }
    
        alert('Form submitted successfully!');
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