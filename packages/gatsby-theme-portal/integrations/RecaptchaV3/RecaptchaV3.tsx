import React, { FunctionComponent, useEffect } from 'react';
import { loadReCaptcha } from 'react-recaptcha-v3';

const ReCaptchaInit: FunctionComponent = () => {
  useEffect(() => {
    process.env['ReCaptcha_enabled'] === 'true' &&
      loadReCaptcha(process.env['ReCaptcha_clientKey']);
  }, []);
  return <></>;
};

export default ReCaptchaInit;
