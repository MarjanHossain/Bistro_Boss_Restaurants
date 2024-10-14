import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';
// import img2 from '../../../assets/2.jpeg';
// import img3 from '../../../assets/3.jpeg';

const Banner = () => {
    return (
        <section className='mb-10 '>
            <Carousel
                className=' '
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src={img1} className='' alt="Banner 1" />
                </div>
                <div>
                    <img src={img2} alt="Banner 2" className='' />
                </div>
                <div>
                    <img src={img3} alt="Banner 3" className='' />
                </div>
                <div>
                    <img src={img3} alt="Banner 3" className='' />
                </div>
                <div>
                    <img src={img4} alt="Banner 4" className='' />
                </div>
                <div>
                    <img src={img5} alt="Banner 5" className='' />
                </div>
                <div>
                    <img src={img6} alt="Banner 6" className='' />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;
