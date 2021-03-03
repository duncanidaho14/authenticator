<?php


namespace App\Events;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class CustomerUserSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['serUserForCustomer', EventPriorities::PRE_VALIDATE]
        ];
    }

    public function setUser
}
