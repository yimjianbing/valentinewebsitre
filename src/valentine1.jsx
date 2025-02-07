import { useNavigate } from 'react-router-dom'

export default function Test() {
    const navigate = useNavigate();

    const handleLetterClick = () => {
        navigate('/valentine2');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <h1 className="text-4xl md:text-6xl my-4 text-center">
                I have a very important thing prepared for you
            </h1>
            <button 
                onClick={handleLetterClick}
                className="bg-pink-100 p-8 rounded-lg shadow-lg hover:bg-pink-200 transition-colors"
            >
                <span className="text-4xl">CLICK ME!!!</span>
            </button>
        </div>
    );
}