import React, { useEffect, useState } from 'react'
import {
    onSnapshot,
    collection,
    doc,
    updateDoc
} from 'firebase/firestore'
import BasicModal from './Modal';

export default function Home({
    database
}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const collectionRef = collection(database, 'userPasswords');
    const [passwordsArray, setPasswordsArray] = useState([]);
    const [passwordObject, setPasswordObject] = useState({});
    const [oldPasswords, setOldPasswords] = useState([]);
    const getPasswords = () => {
        onSnapshot(collectionRef, (response) => {
            setPasswordsArray(response.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
            const data = response.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            setOldPasswords(data[0].passwordsArray)
        })
    }

    const getPasswordInputs = (event) => {
        const data = { [event.target.name]: event.target.value }
        setPasswordObject({ ...passwordObject, ...data });
    }

    const addPasswords = () => {
        const docToUpdate = doc(database, 'userPasswords', passwordsArray[0].id)
        updateDoc(docToUpdate, {
            passwordsArray: [...oldPasswords, passwordObject]
        })
    }

    useEffect(() => {
        getPasswords()
    }, [])
    return (
        <div className='home-main'>
            <h1>Home</h1>
            <div className='card-main'>
                <button
                    onClick={handleOpen}
                    className='input-btn add-password'
                >
                    Add a Password
                </button>
                <div className='password-main'>
                    {passwordsArray.map((password) => {
                        return (
                            <>
                                {password.passwordsArray.map((password) => {
                                    return (
                                        <div className='password-data'>
                                            <p className='password-display'>{password.name}</p>
                                            {/* <p className='password-display'>{password.password}</p> */}
                                        </div>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>
            </div>
            <BasicModal
                open={open}
                handleClose={handleClose}
                getPasswordInputs={getPasswordInputs}
                addPasswords={addPasswords}
            />
        </div>
    )
}
