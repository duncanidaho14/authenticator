<?php

namespace App\Events;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;


class PasswordEncoderSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            kernelEvents::$this->load->view('View File', $data, FALSE);
            
        ]
    }
}
