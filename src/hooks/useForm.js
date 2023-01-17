import { useState } from 'react';
import { getData } from '../helpers/apiHoroscope';

export default function useForm(initialState) {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        // Hacer algo con los datos del formulario, por ejemplo, enviarlos al servidor
        const dataInfo = Object.values(formData)
        if(dataInfo.includes('')) {
            alert('Completa todos los campos para mayor presicion')
            return
        }
        console.log(dataInfo);
        getData(formData.zodiac, dataInfo) 
      
    };

    return { formData, handleInputChange, handleFormSubmit };
}