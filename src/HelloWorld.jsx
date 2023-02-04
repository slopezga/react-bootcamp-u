import React, { useState } from 'react'

const HelloWorld = ({ title, fecha }) => {
    const [value, setValue] = useState(false);
    console.log("🚀 ~ file: HelloWorld.jsx:5 ~ HelloWorld ~ value", value)

    const [value2, setValue2] = useState(true);
    console.log("🚀 ~ file: HelloWorld.jsx:8 ~ HelloWorld ~ value2", value2)



    const validateValue = () => {
        setValue(value2)
    };

    return (
    <div className='formApre'>
        <h1>{title}</h1>
        <span>{fecha}</span>
        <form action="">
            <div onClick={validateValue}>
                <label htmlFor="">
                    { value == value2 ? "Buenas noches" : "hola" }
                    
                    <input type="text" name='nombre'/>
                </label>
            </div>
            <label htmlFor="">
                Name: cedula
                <input type="text" name='cedula'/>
            </label>
            <input type="submit" value='submit'/>
        </form>
    </div>
    )
}

export default HelloWorld