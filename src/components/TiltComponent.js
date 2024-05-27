import { Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Programmer from '../images/Programmer.png'
 
const TiltComponent = () => {
    return (
        <Tilt
            style={{ width: '40%'}}
            tiltMaxAngleX={9}
            tiltMaxAngleY={9}
            perspective={2500}
        >
            <div className='tiltComponent'>
                <Image src={Programmer}/>
            </div>
        </Tilt>
    )
}
 
export default TiltComponent;