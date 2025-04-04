export const generateOTP = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  export const storeOTP = (otp: string) => {
    localStorage.setItem('otp', otp);
    localStorage.setItem('otpTime', Date.now().toString());
  };
  
  export const isOTPValid = (input: string): boolean => {
    const stored = localStorage.getItem('otp');
    const time = localStorage.getItem('otpTime');
    if (!stored || !time) return false;
    const expired = Date.now() - parseInt(time) > 30000;
    return input === stored && !expired;
  };
  