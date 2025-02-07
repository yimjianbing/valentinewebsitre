import { useNavigate } from 'react-router-dom'

export default function Test() {
    const navigate = useNavigate();

    const handleLetterClick = () => {
        navigate('/valentine6');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <h1 className="text-4xl md:text-6xl my-4 text-center">
                or this guy
            </h1>
            <img src="https://media.giphy.com/media/Wu7UDoOBHPHm8/giphy.gif?cid=790b7611qhotpeewth20xrc6cckn57ry8mkzrnupqscpurgn&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="like this guy" />
            <button 
                onClick={handleLetterClick}
                className="bg-pink-100 p-8 rounded-lg shadow-lg hover:bg-pink-200 transition-colors"
            >
                <span className="text-4xl">CLICK ME!!!</span>
            </button>
        </div>
    );
}