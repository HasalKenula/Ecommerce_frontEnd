import People from '../assets/People.jpg'
function AboutSection4() {
    return (

        
        <div className="w-full lg:h-[700px] bg-white-300  flex flex-col md:h-[820px] h-[650px] justify-center item-center text-center">
            <div className="md:text-6xl text-4xl font-bold mt-[24px]  text-center">
            Join our<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold">  happy customers</span>
            </div>
            <div className='text-2xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 font-bold '>
            You can trust our watches and the quality and professionalism of our products.
            </div>
            <div  className=' flex justify-center items-center pt-4 sm:pt-8 md:pt-12 lg:pt-16'>
                    <img src={People} className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-full "/>
                </div>
            <div className='pt-4 sm:pt-8 md:pt-12 lg:pt-16 text-xl font-bold '>
            Carlos Moretti
            </div>
            <div className='pt-4 sm:pt-8 md:pt-12 lg:pt-16 text-xl'>
            "Our products are trusted and recommended by countless satisfied customers for their quality, durability, <br/>
            and reliable performance. Join the community of happy users who continue to choose us with confidence."
            </div>


        </div>

        
    );
}

export default AboutSection4;