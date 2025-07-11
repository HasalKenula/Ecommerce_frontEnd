import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
function About() {
    return (
        <div >
            <div className="sticky top-0 z-50">
                <NavigationBar />
            </div>

            <div className="lg:mb-0 mb-24 ">
                <AboutSection1 />
            </div>


            <div className="lg:mb-0 mb-24 " >
                < AboutSection2 />
            </div>

            <div >
                < AboutSection3 />
            </div>

            <div >
                < AboutSection4 />
            </div>

            <div>
                <Footer />
            </div>


        </div>
    );
}

export default About;