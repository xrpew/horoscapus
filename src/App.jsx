import useForm from './hooks/useForm';

const zodiacSigns = [
    { value: 'aries', label: 'Aries' },
    { value: 'taurus', label: 'Taurus' },
    { value: 'gemini', label: 'Gemini' },
    { value: 'cancer', label: 'Cancer' },
    { value: 'leo', label: 'Leo' },
    { value: 'virgo', label: 'Virgo' },
    { value: 'libra', label: 'Libra' },
    { value: 'scorpio', label: 'Scorpio' },
    { value: 'sagittarius', label: 'Sagittarius' },
    { value: 'capricorn', label: 'Capricorn' },
    { value: 'aquarius', label: 'Aquarius' },
    { value: 'pisces', label: 'Pisces' },
];

export function App() {
    const initialState = { name: '', email: '', message: '', zodiac: '' };
    const { formData, handleInputChange, handleFormSubmit } = useForm(initialState);

    return (

        <>
        <div className='background1'></div>
        <form onSubmit={handleFormSubmit}>
            <label>
                Name:
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder='Jhon Doe'
                    value={formData.name}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Email:
                <br />
                <input
                    type="email"
                    placeholder='example@mail.com'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Zodiac sign:
                <br />
                <select
                    name="zodiac"
                    value={formData.zodiac}
                    onChange={handleInputChange}
                >
                    <option value="">Select...</option>
                    {zodiacSigns.map(sign => (
                        <option key={sign.value} value={sign.value}>
                            {sign.label}
                        </option>
                    ))}
                </select>
                
            </label>
            <label>
                Message:
                <br />
                <textarea
                    name="message"
                    placeholder='Ask something to the fortune'
                    value={formData.message}
                    onChange={handleInputChange}
                    />
            </label>
            <button type="submit">Ask fortune</button>
            
        </form>

    </>
    );
}