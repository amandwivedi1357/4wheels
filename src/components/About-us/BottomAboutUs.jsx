import operations from  "../../assets/about/operations.webp"
import bann_Car from "../../assets/home/banner_Car-removebg.webp"
import "../css/home/RenticgCar.css"
import "../css/About/Bottom.css"
import who from "../../assets/about/who.webp"
import why from "../../assets/about/why.png"
import fleet from "../../assets/about/fleet.webp"
import styled, { css, keyframes } from "styled-components"
import { useNavigate } from "react-router-dom"
const BottomAboutUs = () => {
  const navigate = useNavigate()
  const row1 = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <div className="About_cont">
      <div className="top">
        {/* <div className="left">
          <img src='images/car-park.webp' alt="" />
        </div> */}
        <div className="right">

        <p className="head_text">Who are we?</p>
        <p className="desc_text">4 Wheel Travels Pvt Ltd is renowned as Hyderabad`&apos;`s leading chauffeur-driven car service, with a significant presence across major cities. The company offers an extensive array of travel services, including self-drive cars, local city taxis, long-distance cabs, airport transfers, as well as corporate car rental and management solutions. <br /> <br />
4 Wheel Travels, otherwise referred to by one & all as 4 wheel, is being managed by Mr. Ashwin Jain, the CEO of the company, assisted by a team of people who have been with the company for 15 years or more. <br /> <br />
<strong>We also have our extendedverticals serving to different segments of clients </strong>: <br />
 <strong>Urban Oasis Serviced Apartments & Guest Houses </strong>: Comfortable stays for business travellers. <br />
<strong> Luxe Rides </strong>: Self-drive luxury fleet of cars and bikes for a lavish travel experience.<br />
<strong> Imobiliti LLP </strong>: Network Mobility for convenient transportation. <br />
<strong> Motown Cafe & Garage </strong>: Biker-centric Cafe known for its unique decor and exceptional coffee.

</p>
        </div>
      </div>

      <AppContainer>
      <Wrapper>
        <Text>Meet our sister companies</Text>
        {/* <Note>Our customers have gotten offers from awesome companies.</Note> */}
        <Marquee>
          <MarqueeGroup>
            {row1.map((el,idx) => (
              <ImageGroup key={idx}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el,idx) => (
              <ImageGroup key={idx}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        {/* <Marquee>
          <MarqueeGroup2>
            {row2.map((el,idx) => (
              <ImageGroup key={idx}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el,idx) => (
              <ImageGroup key={idx}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee> */}
      </Wrapper>
    </AppContainer>
      {/* <div className="who_car">
        <div className="who_info">
          <p className="head_text">Why Choose Us?</p>
          
        </div>
        <div className="who_img">
          <img src={why} alt="sports car" />
        </div>
      </div> */}
      <div className="mid">
        <div className="inner_mid">
          <div className="left">

            
        <p className="head_text">Fleet</p>
        <p className="desc_text">4 Wheel boasts one of the largest car rental fleets in Hyderabad. With an extensive fleet of over 300 vehicles in nearly 91 varieties, the selection available to clients is unparalleled by any other company in Hyderabad or beyond. 4 Wheel likely possesses the most valuable collection of cars and buses for rent in the city. It is also widely recognized as the leading provider in Hyderabad for luxury cars and buses, both in terms of fleet size and value. <br /> <br />
4 Wheel also has the reputation for owning practically every car sold in the country and available in car rentals and for also being the first to buy a vehicle in car rentals the moment it is launched.


</p>
          </div>
          <div className="right">
            <img src='images/img2.webp' alt="" />
          </div>
        </div>
      </div>
      <div className="last_Sec">
        <div className="left_sec">
          <div className="top_head">
            <p className="head_text">Why choose us</p>
          </div>
          <div className="bottom_info">
            <ul className="ulTop" >
              <li ><span className="UlHeads">
                Unmatched Experience
                </span>
              <ul  className="ul1">
                  <li>Legacy Brand</li>
                  <li>Service Excellence</li>
                  <li>Customers preference a priority</li>
                  <li>Operational Efficiency</li>
                  <li>24x7 assistance</li>
                  <li>Pan India operations & seamless booking</li>
              </ul>
              </li>
              <li > <span className="UlHeads">
                Safe & reliable
                </span>
              <ul className="ul2">
                  <li>GPS enabled fleet</li>
                  <li>Drivers trained on Defensive Driving Techniques</li>
                  <li>Fully complained with Euro VI (BS – VI) emission norms</li>
                 
              </ul>
              </li>
              {/* <li>Comprehensive website with payment gateway enabled.</li> */}
            </ul>
          </div>
        </div>
        {/* <div className="right_sec">
          <img src={why} alt="" />
        </div> */}
      </div>
      <div className="bottom">
        <div className="inner_btm">
        <p className="head_text">Operations</p>
        <p className="desc_text">4 Wheel operations is divided across 5 main verticals</p>

        <div className="conc_info">
          <img src={operations} alt="" />
        </div>
        
        <div className="btm_cont_text">
          <p className="btm_info">
          These are managed by a 24x7 operations centre located at Road no.5, Jubilee hills.  The own fleet is parked at multiple parking yards (both owned & rented) manned by 24x7 security and CCTV cameras.
The admin office & HO is based at Sagar society, road no.2, banjara hills.
          </p>
        </div>
        </div>

        <div className="banner_cont">
        <div className="banner">
          <div className="left">
            <div className="left_cont">

            <p className="bann_text">Still Have <br /> Questions ? </p>
            <p className="bann_text_2">
            Contact us for assistance
            </p>
            </div>
            <button className="bann_btn" onClick={()=>navigate('/contact-us')}>
              Contact Us
            </button>
          </div>
          <div className="right">
            <img src={bann_Car} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BottomAboutUs


const AppContainer = styled.div`
  width: 100vw;
  margin-top: 8%;
  margin-bottom: -2%;
  color: #000000;
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
   font-size: clamp(20px, 4vw + 1rem, 48px);
  font-weight: 600;
  margin-bottom: 10px;
  font-family: cormorant;
  
  color:  #031b4e;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
 
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
`;