import React from 'react';
import logo from './logo.svg';
import './App.css';

const marginTop = 50, rightA = 100, restLeft = -89, restTop = 47;
const matA = 0.86603, matB = 0.5, rightDef = 50, finalLeft = 184, finalTop = 48;
class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			style: {
				marginTop: '-50px',
    			transform: 'matrix3d(0.86603, 0.5, 0, 0, -0.5, 0.86603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
			},
			phoneStyle: {
				left: '-89px',
    			top: '47%'
			},
			rightBottom: '50vw',
			desRight: 'calc(100% - 100vw - 30px)',
			bottomStyle: {
				right: '80vw',
				transform: 'matrix3d(0.86603, 0.5, 0, 0, -0.5, 0.86603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
			},
			finalStyle: {
				left: '184px',
    			top: '48%'
			}	
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', (e) => this.handleScroll(e));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', (e) => this.handleScroll(e));
	}

	handleScroll(event) {
		let scrollTop = event.srcElement.body.scrollTop;
		console.log(scrollTop);
		this.setState({
			style: {
				marginTop: `-${(marginTop - window.pageYOffset / 15 ) > 0 ? parseInt(marginTop - window.pageYOffset / 15 ) : 0}px`,
    			transform: `matrix3d(${(matA + window.pageYOffset / 7500) > 1 ? 1 : matA + window.pageYOffset / 7500}, ${(matB - window.pageYOffset / 1500) > 0 ? matB - window.pageYOffset / 1500 : 0}, 0, 0, -${(matB - window.pageYOffset / 1500) > 0 ? matB - window.pageYOffset / 1500 : 0}, ${(matA + window.pageYOffset / 7500) > 1 ? 1 : matA + window.pageYOffset / 7500}, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
			},
			desRight: `calc(100% - ${(rightA + window.pageYOffset / 15) > 150 ?  150 : (rightA + window.pageYOffset / 15)}vw - 30px)`,
			rightBottom: `${(marginTop - window.pageYOffset / 25 ) > 10 ? parseInt(marginTop - window.pageYOffset / 25 ) : 10}vw`,
			phoneStyle: {
				left: `${(restLeft + window.pageYOffset / 6 ) < 290 ? parseInt(restLeft + window.pageYOffset / 6 ) : 290}px`,
    			top: `${(restTop + window.pageYOffset / 8 ) < 150 ? parseInt(restTop + window.pageYOffset / 8 ) : 150}%`
			},
			finalStyle: {
				left: `${(finalLeft + window.pageYOffset / 4 ) < 558 ? parseInt(finalLeft + window.pageYOffset / 4 ) : 558}px`,
    			top: `${(finalTop + window.pageYOffset / 8 ) < 150 ? parseInt(finalTop + window.pageYOffset / 8 ) : 150}%`
			},
		})
	}

   render() {
	   const { style, desRight, rightBottom, phoneStyle, finalStyle } = this.state;
	  var myStyle1 = {
         marginTop:'10px'
      }
	  var dummyimg = {
		 height: '200px',
	     background: '#aaa'
	  }
	  
      return (		   
		<section className="calypso-block calypso-block--EW19-tile-1">
			<div className="hpc-mobile-bg desktop-hidden"></div>
			<div className="container">
				<div className="row calypso-promo calypso-promo--first-lg-b48">
					<div id="hpc_col1" className="col-12 col-md-12 col-lg-5 offset-lg-0 calypso-promo__first align-top  align-center">
						<div className="hpc-text" >
							<h1 className="h1--EW19 hpc-animate hpc-animate--from-left hpc-animate--delay-1 hpc-animate--animated">
							<div>Start Selling</div>
							<div className="hpc-underlined-sales-channel">
								<span className="hpc-on" id="hpc_on"></span>  
								<span className="hpc-underlined -line hpc-underlined--yellow" id="hpc_underlined">  
								<span className="hpc-underlined__text">  
									<span id="hpc_sales_channel">Online for Free</span> 
									<span className="hpc-caret hpc-caret--show hpc-caret--blink" id="hpc_caret"></span>  
								</span>  
								</span>
							</div>
							</h1>
							<p className="hpc-animate hpc-animate--from-left hpc-animate--delay-2 calypso-block__text hpc-animate--animated">
							We’re putting free trials on&nbsp;trial. With Ecwid, you get free FOREVER. Set up&nbsp;your free account once, and&nbsp;keep it&nbsp;as&nbsp;long as&nbsp;you like. Seriously.
							</p>
							<div className="btn-block calypso-block__btn-block hpc-animate hpc-animate--from-left hpc-animate--delay-3 hpc-animate--animated">
								<div className="btn-block__text-center">  
									<a href="https://my.ecwid.com/cp/?partner=ecwid_rus2#register" className="btn btn--large btn--shadow cta-signup" target="_blank" rel="nofollow noopener">Get started for&nbsp;free
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="hpc_col2" className="col-12 col-md-12 col-lg-7 offset-lg-0 calypso-promo__second calypso-promo__second--EW19-maintile align-bottom text-center  hero-image">
						<div className="hpc-pics hpc-pics--no-rotated" >
							<div className="hpc-pics__bg hpc-pics__bg--second" style={{transform: style.transform, right: rightBottom}}></div>
						</div>
						<div className="hpc-pics hpc-pics--rotated desktop-visible" id="hpc_pics" style={style}>
							<div className="hpc-pics__bg hpc-pics__bg--yellow" id="hpc_bg" style={{right:desRight}}>

							</div>
							<div className="hpc-pics__phone hpc-animate hpc-animate--from-opacity hpc-animate--animated" style={phoneStyle}>
								<div className="hpc-phone" id="hpc_phone">
									<div className="hpc-phone__frame">
										<div className="hpc-phone__slide hpc-phone__slide--current">  
											<img className="hpc-phone__image" src="https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/phone-slide1_.jpg" alt="" />
										</div>
									</div>
									<div className="hpc-phone__cover"></div>
								</div>
							</div>
							<div className="hpc-pics__tablet hpc-animate hpc-animate--from-opacity hpc-animate--delay-6 hpc-animate--animated" style={finalStyle}>
								<div className="hpc-pics__glasses hpc-animate hpc-animate--delay-8 hpc-animate--animated">
									<div className="hpc-glasses" id="hpc_glasses"></div>
								</div>
								<div className="hpc-tablet" id="hpc_tablet">
									<div className="hpc-tablet__frame">
									<div className="hpc-tablet__slide hpc-tablet__slide--next">  
										<img className="hpc-tablet__image" alt="" src="https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/tablet-slide6.jpg" />
									</div>
									<div className="hpc-tablet__slide hpc-tablet__slide--current">  
										<img className="hpc-tablet__image" src="https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/tablet-slide1.jpg" alt="" />
									</div>
									</div>
									<div className="hpc-tablet__cover">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	   
      );
   }
}

export default App;