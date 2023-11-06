import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = ()=>{
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='text-green-500 text-3xl font-bold w-full'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque dolorum dolore amet esse repellendus explicabo similique! Obcaecati dolores vero a magnam ullam? Sit cupiditate tempora, eos atque at eligendi.</p>
                <div className='flex justify-between my-6 md:w-[75%]'>
                    <FaDribbbleSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className='flex mt-6 justify-between'>
                <div>
                    <h6 className='font-medium text-gray-500'>Solutions</h6>
                    <ul>
                        <li className='lg:mr-24 py-2 text-sm'>Analystics</li>
                        <li className='lg:mr-24 py-2 text-sm'>Marketing</li>
                        <li className='lg:mr-24 py-2 text-sm'>Commerce</li>
                        <li className='lg:mr-24 py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Support</h6>
                    <ul>
                        <li className='py-2 lg:mr-24 text-sm'>Pricing</li>
                        <li className='py-2 lg:mr-24 text-sm'>Documentation</li>
                        <li className='py-2 lg:mr-24 text-sm'>Guides</li>
                        <li className='py-2 lg:mr-24 text-sm'>Api Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Company</h6>
                    <ul>
                        <li className='py-2 lg:mr-24 text-sm'>About</li>
                        <li className='py-2 lg:mr-24 text-sm'>Blogs</li>
                        <li className='py-2 lg:mr-24 text-sm'>Jobs</li>
                        <li className='py-2 lg:mr-24 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm lg:mr-24'>Claim</li>
                        <li className='py-2 text-sm lg:mr-24'>Policy</li>
                        <li className='py-2 text-sm lg:mr-24'>Terms</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;