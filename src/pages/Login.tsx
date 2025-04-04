import { useNavigate } from 'react-router-dom';
import { generateOTP, storeOTP } from '../utils/otp';

const Login = () => {
  const navigate = useNavigate();

  const handleGetOTP = () => {
    const otp = generateOTP();
    storeOTP(otp);
    alert(`Your OTP is: ${otp}`);
    navigate('/verify');
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <button onClick={handleGetOTP}>Get OTP</button>
    </div>
  );
};

export default Login;
