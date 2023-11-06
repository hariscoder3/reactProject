import laptop from "../assets/laptop.jpg"

const Analytics = ()=>{
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={laptop} alt="analytics tab" />
                <div className="flex flex-col justify-center">
                    <p className="text-green-600 font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, tempora rerum quod illo nostrum iusto vel amet dolorem enim? Dolorum, maiores fugiat mollitia quas atque ratione adipisci nobis iusto tempore!</p>
                    <button className='bg-black my-6 w-[200px] mx-auto md:mx-0 py-3 rounded-md text-green-400 font-medium hover:bg-gray-700'>Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Analytics;