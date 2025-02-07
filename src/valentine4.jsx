import { useNavigate } from 'react-router-dom'

export default function Test() {
    const navigate = useNavigate();

    const handleLetterClick = () => {
        navigate('/valentine5');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <h1 className="text-4xl md:text-6xl my-4 text-center">
                like this guy
            </h1>
            <img src="https://i.pinimg.com/736x/0a/d2/f6/0ad2f6b594cf590d9660bacae15ce1c1.jpg" alt="like this guy" />
            <button 
                onClick={handleLetterClick}
                className="bg-pink-100 p-8 rounded-lg shadow-lg hover:bg-pink-200 transition-colors"
            >
                <span className="text-4xl">CLICK ME!!!</span>
            </button>
        </div>
    );
}