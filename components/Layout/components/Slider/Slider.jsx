import axios from "axios";
import React, {useEffect,useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cookies from 'universal-cookie';


let base_url_api = "https://staging.apricart.pk/v1";

export default function Slider(){
   const cookies = new Cookies();

    const [banners, setBanner] = useState([]);
    const getPopularitems = async () => {
       const response = await axios.get(base_url_api + `/offers/banners?city=${cookies.get('cities')}&lang=en`); 
       setBanner( response.data.data);
    }
    
    useEffect( () => {
       getPopularitems();
      
      } , []);
   
    return(
      
        <section className="home_banner">
        <div>
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} showArrows={true} interval={5000}>
           {
              banners.map((banner) => {
               const {id,bannerUrlWeb} = banner;

                 return(
                  <div className="carousel-inner" key={id}>
                  <img src={base_url_api + bannerUrlWeb} className="img-fluid" alt=""/>
                 </div>
                 )
              })
           }

            </Carousel>
        </div>
     </section>

    );
}
