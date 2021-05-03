import { useState } from 'react'

export const useForm = (state = {}) => {
    const [form, setForm] = useState(state);

    const handleChange = ({target}) =>{
        const { name, value } = target;
        setForm(formy =>({ 
            ...formy,
            [name]: value,
        }))
    }
    return [form, handleChange]
}
