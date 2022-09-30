import React from 'react'
import Homee from '../assests/Homee.png'
import { Link } from 'react-router-dom'
import img from '../assests/img.png'
import Badges from '../assests/Badges.png'
import m1 from '../assests/m1.png'
import m11 from '../assests/m11.png'
import m111 from '../assests/m111.png'

const Home = () => {
  return (
   <div className='header'>
    <div className='header-img'>
    <img src={Homee} alt='logo' />
    <h3 className='header-text'>
      Lilies
      </h3>
    </div>
  <nav className='navbar'>
    <ul>
      <li>
       <span className='Hom'> <Link to='/'>Home</Link></span>
        <span className='log'><Link to='/Login'>Login</Link></span>
        <span className='Reg'><Link to='/Register'><button className='btn'>REGISTER</button></Link></span>
      </li>
    </ul>
  </nav>

  <div className='bod'>
    <h1>Order <span className='aa'>food</span> anytime,< br/>
    anywhere
  </h1>
  <div className='caption'>
    <div className='img1'>
      <img src={img} alt='logo1' width={260} height="260"></img>
    </div>
  <p>Browse from our list of specials to place your Order and have food <br /> delivered to you in no time. Affordable, tasty and fast!</p>
  <div className='img11'>
    <img src={Badges} alt='logo11'></img>
  </div>
  </div>
  </div>
  <div className='mid'>
    <h3>Special Meals of the day!</h3>
  </div>
  <div className='c1'>
    <p>Check our specials of the day and get discounts on all our meals<br />
    and swift delivery to what ever location within Ilorin.</p>
  </div>
   <div className='m1'>
    <img src={m1} alt='logo4' width={269} height='260'></img>
    <img className='r' src={m11} alt='logo5' width={269} height='260'></img>
    <img className='r1' src={m111} alt='logo6' width={269} height='260'></img>
    <h3 className='fig'>Stir Fry Pasta
    <span className='fig1'>Meat Balls</span>
    <span className='fig11'>Burger Meal</span></h3>
    <h5 className='f'> Stir fry pasta yada yada  because of season.
    <span className='f1'> Stir fry pasta yada yada  because of season. </span>
    <span className='f11'> Stir fry pasta yada yada because of season.</span>
    </h5>
   </div>
  <div className='bot'>
    <h2>Get notify when Update!</h2>
  </div>
  <div className='cap1'>
    <p>Get notify when we add new items to our specials menu, <br />
    Update our price list of have promos!</p>
    <div className='srch'>
    <input className='sea' type="text" name="email" placeholder="email"></input>
    <button className='gg'>Get Notified</button>
  </div>
  </div>
  <section className='sec'>
  <div className='bottom'>
     <ul className='li'>
      <b><li className='kom'>Company
             <span className='k'>Support</span>
             <span className='l'>Legal</span>
        </li></b></ul>
        <div className='n'>
          <ul className='ooo'>
         <li className='n1'>About Us</li>
            <span className='k1'>Help Centre</span>
            <span className='l1'>Cookies Policy</span>
         </ul>
         </div>
         <div className='mnm'>
         <ul className='nnn'>
          <li className='m'>Career</li>
            <span className='q'>Safety Centre</span>
            <span className='a'>Privacy Policy</span>
          </ul></div>
          <div className='pop'><ul className='popp'><li className='b'>Contact Us</li>
          <span className='p'>Terms of Service</span> 
      </ul>  
      </div>
  </div>
  <div className='mop'>
         <ul className='mopp'>
          <li className='z'>Dispute Resolution</li>
          </ul>
          </div>
  
  <div>
    <h6>Felix Joshua</h6>
  </div>
  </section>
   </div>

  )
}

export default Home