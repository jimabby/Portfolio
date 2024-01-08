import './index.scss';
import profile from '../../../assets/images/profile.jpg'

const Logo = () => {
  return  (
    <div className='logo-container'>
      <img className='solid-logo' src={profile} alt="J"/>
    </div>
  )
}

export default Logo;