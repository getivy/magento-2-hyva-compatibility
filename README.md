# Magento 2 - IvyPaymentHyvaCompatibility module installation

## Minimum requirements
We are using strict requirements in the `composer.json` file, to make sure compatibility follows from the `composer` requirements. When you have questions regarding compatibility, install the extension via `composer`. If it works, it is because it is compatible. If it does not work, it is because it is not compatible. When a new version of Magento comes out and the `composer` command fails, while you think it should actually work, open a support ticket so we can look into this.

## Instructions for using composer
Use composer to install this extension. First make sure that Magento is installed via composer, and that there is a valid `composer.json` file present.

Next, install our module using the following command:

    composer require getivy/magento-2-hyva-compatibility

Next, install the new module into Magento itself:

    bin/magento setup:upgrade
    bin/magento cache:clean

## Instructions for manual copy
We recommend `composer` to install this package. Also, the method described here is not supported. If you are less knowledgeable on how to install extensions, use `composer` instead. If you want a manual copy instead, these are the steps.

Download a ZIP of this repository. Extract the files. Upload the files to the folder `app/code/Esparksinc/IvyPaymentHyvaCompatibility` of your site.

Next, install the new module into Magento itself:

    bin/magento setup:upgrade
    bin/magento cache:clean

## Removing the extension
If you are not the person having added this extension, we very strongly recommend you to have a technical person look into the deinstallation of our module. Deinstalling Magento modules is a technical matter, peanuts for a developer and our extension is not different in any way.

If you have installed this extension via `composer`, simply follow the `composer` procedure again:

    composer remove getivy/magento-2-hyva-compatibility

If you have copied files to `app/code/Esparksinc/IvyPaymentHyvaCompatibility`, remove them.

Next, follow your deployment procedure to copy changes to your live site. Do not forget to upgrade your Magento 2 setup and clean cache after removing the extension.
