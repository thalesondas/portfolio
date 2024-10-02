import { Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Programmer from '../images/Programmer.png'
 
const TiltComponent = () => {
    return (
        <Tilt
            style={{ width: '40%'}}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={2600}
        >
            <div className='tiltComponent'>
                <Image src={Programmer} draggable="false"/>
            </div>
        </Tilt>
    )
}
 
export default TiltComponent;