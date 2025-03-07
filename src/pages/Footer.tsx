import Cat from '../assets/Cat.jpg';
function Footer() {
    return (
        <div>
            <div className="w-full lg:h-[700px] bg-red-300 flex flex-col lg:flex-row md:h-[1320px] h-[850px]">
                <div>
                    footer <br />

                    A grayscale image with pixel values ranging from 0 to 255 can have a CLUT that maps those grayscale values to a specific set of colors, creating a false-color image.
                    <div >
                        <img src={Cat} className="h-[200px] w-[200px]" />
                    </div>
                    footer
                </div>
            </div>
        </div>
    )
}

export default Footer;