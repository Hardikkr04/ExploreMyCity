import { useEffect, useState } from 'react';
import Image1 from '../../assets/vns1.jpg';
import Image2 from '../../assets/vns2.jpg';
import Image3 from '../../assets/vns3.jpg';
import Image4 from '../../assets/vns4.jpg';
import Image5 from '../../assets/vns5.jpeg';
import Image6 from '../../assets/vns6.jpg';
import Image7 from '../../assets/vns7.jpg';
import Image8 from '../../assets/vns8.avif';
import Image9 from '../../assets/vns9.jpg';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const images: any = [
    { id: 1, path: Image1 },
    { id: 2, path: Image2 },
    { id: 3, path: Image3 },
    { id: 4, path: Image4 },
    { id: 5, path: Image5 }

]
const data = {
    aboutVns: "",
    aboutBhu: "",
    aboutMaliyoFood: "",
    aboutManiGhatt: "",
    hotels: []
}
export default function HomeComponent() {
    const [cityData, setCityData] = useState(data);

    useEffect(() => {
        getCitiesData();
    }, [])

    function getCitiesData() {
        axios.get("http://localhost:4000/uttarpradesh").then(res => {
            const data = res.data.vanarsi;
            setCityData(data);
        })
    }
    
    return (
        <>
            <Carousel interval={3000}>
                {images.map((item: any) => (
                    <Carousel.Item>
                        <div className='image-container'>
                            <img src={item.path} alt="carousel img" />
                            <div className='text-container'>HAR HAR MAHADEV</div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='main-container'>
                <div className='row'>
                    <div className='mt-4 col'>
                        <div className='intro-heading'>GANGA RIVER</div>
                        <div className='intro-div mt-2'> {cityData.aboutVns}</div>
                    </div>
                    <div className='col'>
                        <img src={Image6} alt="Image6" width="600" height="300" className='side_image1' />
                    </div>
                </div>
                <div className='mt-5 pt-2 row'>
                    <div className='col'>
                        <img src={Image7} alt="Image7" width="600" height="300" className='side_image1' />
                    </div>
                    <div className='intro-div mt-4 col'>
                        <div className='intro-heading'>IIT BHU</div>
                        <div intro-div mt-2>{cityData.aboutBhu}</div>
                    </div>
                </div>
                <div className='mt-5 pt-2 row'>
                    <div className='intro-div mt-4 col'>
                        <div className='intro-heading'>MALIYO</div>
                        <div intro-div mt-2>{cityData.aboutMaliyoFood}</div>
                    </div>
                    <div className='col'>
                        <img src={Image8} alt="Image8" width="600" height="300" className='side_image1' />
                    </div>
                </div>
                <div className='mt-5 pt-2 row'>
                    <div className='col'>
                        <img src={Image9} alt="Image8" width="600" height="300" className='side_image1' />
                    </div>
                    <div className='intro-div mt-4 col'>
                        <div className='intro-heading'>MANIKARNIKA GHATT</div>
                        <div intro-div mt-2>{cityData.aboutManiGhatt}</div>
                    </div>
                </div>
            </div>

        </>
    );

}