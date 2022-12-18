<?php

declare(strict_types=1);

namespace Esparksinc\IvyPaymentHyvaCompatibility\Plugin;

use Esparksinc\IvyPayment\Model\Config;
use Hyva\ReactCheckout\ViewModel\CheckoutConfigProvider;
use Magento\Framework\Serialize\SerializerInterface;
use Magento\Theme\Block\Html\Header\Logo;

class CheckoutConfigProviderPlugin
{
    private SerializerInterface $serializer;
    private Logo $logo;
    private Config $config;

    /**
     * @param SerializerInterface $serializer
     * @param Logo $logo
     * @param Config $config
     */
    public function __construct(
        SerializerInterface $serializer,
        Logo                $logo,
        Config              $config
    ) {
        $this->serializer = $serializer;
        $this->logo = $logo;
        $this->config = $config;
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterGetConfig(CheckoutConfigProvider $subject, string $serializedResult): string
    {
        $result = $this->serializer->unserialize($serializedResult);

        $result['payment']['IvyPayment'] = [
            'logo' => $this->logo->getLogoSrc(),
            'mcc' => $this->config->getMcc(),
            'locale' => $this->config->getLocale(),
            'is_active' => $this->config->isActive()
        ];

        return $this->serializer->serialize($result);
    }
}
