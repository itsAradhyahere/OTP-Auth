import { useNavigate } from 'react-router-dom';
import { generateOTP, storeOTP } from '../utils/otp';

const ResendOTP = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    const newOTP = generateOTP();
    storeOTP(newOTP);
    alert(`Your new OTP is: ${newOTP}`);
    navigate('/verify');
  };

  return (
    <div className="resend-container">
      <h2>OTP Expired</h2>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default ResendOTP;
