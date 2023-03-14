
import React, { useState } from 'react'
import Card from '../ui/card/Card';
import './AddUser.css'
import Button from '../ui/button/Button';
import ErrorModal from '../ui/errormodal/ErrorModal';

const AddUser = (props) => {


    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length === 0 || age.trim().length === 0) {
            setErrorMessage("Input Field Is Required")
            setError(true)
            return;
        }

        if (Number(age) < 1) {
            setErrorMessage("Minimu Age Is 1")
            setError(true)
            return
        }

        let newUser = {
            name,
            age
        }
        setAge('')
        setName('')
        props.onAddUser(newUser)


    }

    const closeModal = ()=>{

    }




    return (

        <>

            {error && <ErrorModal
            message={errorMessage}
            title={'Input Error'}
            setError={setError}
            />
            }

            <Card >
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='username'>User Name</label>
                    <input type="text"
                        value={name}
                        onChange={handleName}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type="number"
                        value={age}
                        onChange={handleAge}
                    />
                    <Button className='submitButton'
                        type='submit'
                    >
                        Add User
                    </Button>
                </form>

            </Card>
        </>
    )
}

export default AddUser