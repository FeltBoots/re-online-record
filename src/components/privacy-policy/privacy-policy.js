import React from 'react';
import './privacy-policy.css';
import '../app/app.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      Нажимая «Записаться», я выражаю своё согласие с обработкой моих персональных данных в соответствии с
      принятой <a className="link" href="#">политикой конфиденциальности</a> и принимаю <a className="link"
                                                                                                href="#">
      пользовательское соглашение</a>
    </div>
  );
};

export default PrivacyPolicy;
