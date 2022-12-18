# Hyvä Esparksinc IvyPaymentHyvaCompatibility Module
## Magento 2 module template for extending upon the Hyvä React Checkout module

This is a Magento 2 module template that enables you to customize Hyvä React Checkout seamlessly. It adds a custom Webpack configuration, so that you can extend upon the React sources of the original React Checkout module. In effect, this allows for kind of a parent/child theming mechanism, not for the entire Hyvä theme, but only for the specific React sources in your custom checkout.

## Installation
- Install Hyvä Checkout via composer. You can find more details in the [**official documentation**](https://hyva-themes.github.io/magento2-react-checkout/installation/)
- Setup this Magento 2 module template in your project. We are naming the module `Esparksinc_IvyPaymentHyvaCompatibility`.
    - Clone it into `app/code/Esparksinc/IvyPaymentHyvaCompatibility`
    - Enable your module with `bin/magento module:enable Esparksinc_IvyPaymentHyvaCompatibility`
    - Run setup upgrade with `bin/magento setup:upgrade`

- Setup ReactApp (See: [How to customize Hyvä Checkout](https://hyva-themes.github.io/magento2-react-checkout/customize/))
    - Specify payment methods repositories (if any) in `app/code/Esparksinc/IvyPaymentHyvaCompatibility/reactapp/package.json`.
    - Navigate into `app/code/Esparksinc/IvyPaymentHyvaCompatibility/reactapp`.
    - Run `npm install` (do not use `yarn`)

- Start ReactApp
    - Update `proxy` setting in `app/code/Esparksinc/IvyPaymentHyvaCompatibility/reactapp/package.json` with the base url of your magento instance.
    - Copy the `env.example` file into `.env` and modify its contents
    - Run `npm run start`

Please remember this is a template. So you can name this module as you wish. There is no need to go on with the given name `Esparksinc_IvyPaymentHyvaCompatibility`. If you have a different name for this template then, you need to update the module name at least in below files.

- registration.php
- composer.json
- etc/module.xml
- Change template as per your module name at `view/frontend/layout/hyvareactcheckout_reactcheckout_index.xml`

    ```
    <referenceBlock name="checkout.scripts" template="Esparksinc_IvyPaymentHyvaCompatibility::react-script.phtml" />
    ```
- Change js file reference at `view/frontend/templates/react-script.phtml`

    ```
    newScript.src = '<?= $escaper->escapeUrl($block->getViewFileUrl('Esparksinc_IvyPaymentHyvaCompatibility::js/react-checkout.js')); ?>';
    ```

## Copying React components
As an example you could copy the original `LoginForm.jsx` component and make some modifications to hit, like adding a simple `Hello World`. Copy the original path `vendor/hyva-themes/magento2-react-checkout/src/reactapp/src/components/login/components/LoginForm.jsx` into `app/code/Esparksinc/IvyPaymentHyvaCompatibility/reactapp/src/components/login/components/LoginForm.jsx`.

Open up the React source and locate the lines including `import`:

```react
import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import useLoginFormContext from '../hooks/useLoginFormContext';
import {__} from '../../../i18n';
```

Change these relative imports into the references to `@hyva/react-checkout`:

```react
import Button from '@hyva/react-checkout/components/common/Button';
import TextInput from '@hyva/react-checkout/components/common/Form/TextInput';
import useLoginFormContext from '@hyva/react-checkout/components/login/hooks/useLoginFormContext';
import {__} from '@hyva/react-checkout/i18n';
```

Note that the NPM package `@hyva/react-checkout` actually does not (yet) exist. It is a Webpack alias pointing to
the path `vendor/hyva-themes/magento2-react-checkout/src/reactapp/src`.

## Payment Integrations
With the React Checkout, you may need to use existing payment repositories. They will work out of box with the React Checkout
repository. But you may face issues when you use them inside the template. This is because it is failing to load the
relative imports. You need to use `@hyva/react-checkout` for all those non-resolving imports.

There will be solution for this problem in those repositories. So always pay attention in the payment repositories documentation.
