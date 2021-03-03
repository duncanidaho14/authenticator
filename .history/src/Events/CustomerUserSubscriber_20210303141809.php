<?php


namespace App\Events;

use App\Entity\Customer;
use Symfony\Component\HttpKernel\KernelEvents;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class CustomerUserSubscriber implements EventSubscriberInterface
{
    $entityManager->persist($varName);
    $entityManager->flush();
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['serUserForCustomer', EventPriorities::PRE_VALIDATE]
        ];
    }

    public function setUserForCustomer(GetResponseForControllerResultEvent $event)
    {
        $result = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($customer instanceof Customer && $method === "POST") {
            # code...
        }

        //choper l'utilisateur actuellement connecté

        //Assigner l'utisateur au customer qu'on est en train de créer
        dd($result);
    }
}
