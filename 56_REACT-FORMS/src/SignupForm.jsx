import { useState } from 'react';

export default function SingupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }

    return (
        <div>
            <label htmlFor="firstName">姓</label>
            <input id="firstName" type="text" placeholder="太郎" value={firstName} onChange={updateFirstName}/>
            <button>送信</button>

            <label htmlFor="lastName">名</label>
            <input id="lastName" type="text" placeholder="山田" value={lastName} onChange={updateLastName}/>
            <button>送信</button>
        </div>
    );
};
