import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const slideImages = [
  'https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/phone-slide2.jpg',
  'https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/phone-slide6.jpg'
];
 
class Slideshow extends React.Component {
    render() {
        return (
            <div>
                <Slide arrows={false}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <span>Slide 3</span>
                    </div>
                </div>
                </Slide>
            </div>
        )
    };
}
export default Slideshow;