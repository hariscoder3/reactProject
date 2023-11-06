import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"
const Cards = ()=>{
    return (
        <div className="w-full bg-white py-[10rem] md:px-7 sm:px-40 px-7">
            <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
                {/* card one */}
                <div className="w-full flex flex-col p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white mt-[-3rem]" src={single} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Sigle User</h2>
                    <p className="text-center text-4xl font-bold">$20/month</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">200GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send upto 2 GB</p>
                    </div>
                    <button className='bg-green-500 my-6 w-[200px] mx-auto py-3 rounded-md text-black font-medium hover:bg-green-600'>Start Trial</button>
                </div>
                {/* card two */}
                <div className="w-full flex flex-col p-4 md:my-0 my-4 shadow-xl rounded-lg scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white mt-[-3rem]" src={double} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">$29/month</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">400GB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send upto 10 GB</p>
                    </div>
                    <button className='bg-black my-6 w-[200px] mx-auto py-3 rounded-md text-green-500 font-medium hover:bg-gray-700'>Start Trial</button>
                </div>
                {/* card three */}
                <div className="w-full flex flex-col p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white mt-[-3rem]" src={triple} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">$49/month</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
                        <p className="py-2 border-b mx-8">Unlimited Granted User</p>
                        <p className="py-2 border-b mx-8">Send upto 20 GB</p>
                    </div>
                    <button className='bg-green-500 my-6 w-[200px] mx-auto py-3 rounded-md text-black font-medium hover:bg-green-600'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;