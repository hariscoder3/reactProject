
const Newsletter = ()=>{
    return (
        <div className="w-full text-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col w-full sm:flex-row items-center justify-between">
                        <input type="email" placeholder="Enter Email" className="p-3 rounded-md text-black flex w-full"/>
                        <button className='bg-green-500 my-6 w-[200px] mx-auto py-3 rounded-md text-black font-medium hover:bg-green-600 ml-4'>Get Started</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-green-500"> privacy policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;