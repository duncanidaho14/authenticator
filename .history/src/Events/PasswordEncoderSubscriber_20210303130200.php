<?php

namespace App\Events;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;


class PasswordEncoderSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['encodePassword']
        ]
    }
}
