import React from 'react';

import Card from '@hyva/react-checkout/components/common/Card';
import ToggleBox from '@hyva/react-checkout/components/common/ToggleBox';
import LoginForm from '@hyva/react-checkout/components/login/components/LoginForm';
import UserInfoBox from '@hyva/react-checkout/components/login/components/UserInfoBox';
import LoginFormManager from '@hyva/react-checkout/components/login/components/LoginFormManager';
import { __ } from '@hyva/react-checkout/i18n';
import { formikDataShape } from '@hyva/react-checkout/utils/propTypes';
import LoginInfoBox from '@hyva/react-checkout/components/login/components/LoginInfoBox';
import IvyPaymentExpress from '../IvyPaymentExpress';

const LoginMemorized = React.memo(({ formikData }) => (
  <LoginFormManager formikData={formikData}>
    <Card>
      <IvyPaymentExpress />
      <ToggleBox title={__('Customer Information')} show>
        <LoginInfoBox />
        <LoginForm />
        <UserInfoBox />
      </ToggleBox>
    </Card>
  </LoginFormManager>
));

LoginMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default LoginMemorized;
