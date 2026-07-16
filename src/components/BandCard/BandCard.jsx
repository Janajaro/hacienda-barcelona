import { useParams } from "react-router-dom";

import "./BandCard.css";

const BandCard = ({band}) => {

    const {lang} = useParams();

    return (

        <div className="band-card"> 

                    <div className="band-card-stage">

                        <p>{band.stage}</p>
                        <p>{band.showDate}</p>
                        <p>{band.showTime}</p>

                    </div>

                    <img src={band.img} alt={band.slug}  className="band-card-img" />  


                <div className="band-card-annotation">

                    <p>{band.annotation[lang]}</p> 

                </div>              
                
            </div>
        
    )
}

export default BandCard