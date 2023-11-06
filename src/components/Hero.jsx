import {useTypewriter} from 'react-simple-typewriter';

const Hero = ()=>{
    const [text] = useTypewriter({
        words:['BTB','BTC','SaaS'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 140,
    });
    return (
        <div className="text-white">
            <div className="max-auto mt-[-110px] text-center w-full h-screen flex flex-col justify-center">
                <p className="text-green-500 font-bold">GROWING WITH DATA ANALYTICS</p>
                <h1 className="font-bold md:text-6xl sm:text-6xl text-4xl md:py-6">Grow with data.</h1>
                <div className="flex justify-center">
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Fast, Flexible financing for {text}
                    </p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className='bg-green-500 my-6 w-[200px] mx-auto py-3 rounded-md text-black font-medium hover:bg-green-600'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;