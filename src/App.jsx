import useForm from './hooks/useForm';
import { FirstApp } from './components/FirstApp';

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
        {/* <FirstApp/> */}
        <form onSubmit={handleFormSubmit}>
            <label>
                Name:
                <hr />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Email:
                <hr />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Zodiac sign:
                <hr />
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
                <hr />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    />
            </label>
            <button type="submit">Ask fortune</button>
            
        </form>

    </>
    );
}