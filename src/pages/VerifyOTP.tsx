import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isOTPValid } from '../utils/otp';

const VerifyOTP = () => {
  const [otpInput, setOtpInput] = useState('');
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/resend');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleSubmit = () => {
    if (isOTPValid(otpInput)) {
      navigate('/dashboard');
    } else {
      navigate('/resend');
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <input
        type="text"
        maxLength={6}
        value={otpInput}
        onChange={(e) => setOtpInput(e.target.value)}
      />
      <p>Expires in: {timer}s</p>
      <button onClick={handleSubmit}>Verify</button>
    </div>
  );
};

export default VerifyOTP;
