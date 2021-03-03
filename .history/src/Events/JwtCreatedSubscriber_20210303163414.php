<?php

namespace App\Events;

class JwtCreatedSubscriber
{
    public function updateJwtData(JWTCreatedEvent $event)
    {
        dd($event);
    }
}