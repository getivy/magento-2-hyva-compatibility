import React, { useCallback, useContext, useEffect } from 'react';
import env from '@hyva/react-checkout/utils/env';
import RootElement from '@hyva/react-checkout/utils/rootElement';
import CartContext from '@hyva/react-checkout/context/Cart/CartContext';
import { get as _get } from 'lodash-es';

function IvyPaymentExpress() {
  const [cartData] = useContext(CartContext);
  const { code: rootCurrencyCode } = RootElement.getCurrency();
  const envCurrencyCode = env.currencyCode;

  const currencyCode = envCurrencyCode || rootCurrencyCode;
  const cart = _get(cartData, 'cart');
  const prices = _get(cart, 'prices') || {};
  const { grandTotalAmount } = prices;

  const paymentConfig = RootElement.getPaymentConfig();
  const IvyPaymentConfig = paymentConfig.IvyPayment || {};
  const { mcc, locale } = IvyPaymentConfig;

  const linkUrl = `${window.BASE_URL}ivypayment/checkout/index/express/1`;
  const initExpress = useCallback(async () => {
    await fetch(linkUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { redirectUrl } = result;
        if (Object.prototype.hasOwnProperty.call(window, 'startIvyCheckout')) {
          window.startIvyCheckout(redirectUrl, 'popup');
        }
      });
  }, [linkUrl]);

  useEffect(() => {
    if (grandTotalAmount) {
      window.initIvyButton();
    }
  }, [grandTotalAmount]);

  return grandTotalAmount ? (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      className="ivy-checkout-button"
      data-position="above"
      data-currency-code={currencyCode}
      data-cart-value={grandTotalAmount}
      data-locale={locale}
      data-shop-category={mcc}
      onClick={initExpress}
    />
  ) : null;
}

export default IvyPaymentExpress;
