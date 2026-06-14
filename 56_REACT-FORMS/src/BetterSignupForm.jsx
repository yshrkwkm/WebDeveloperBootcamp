import { useState } from 'react';

export default function BetterSingupForm() {
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: ''});

    const handleChange = (evt) => {
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setFormData((currData) => {
            return {...currData, [fieldName]: value};
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="lastName">名</label>
            <input 
                id="lastName"
                name='lastName'
                type="text"
                placeholder="山田"
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="firstName">姓</label>
            <input 
                id="firstName"
                name='firstName'
                type="text" 
                placeholder="太郎" 
                value={formData.firstName} 
                onChange={handleChange}
            />

            <label htmlFor="password">パスワード</label>
            <input 
                id="password"
                name='password'
                type="password" 
                placeholder="パスワード" 
                value={formData.password} 
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>送信</button>
        </div>
    );
};
