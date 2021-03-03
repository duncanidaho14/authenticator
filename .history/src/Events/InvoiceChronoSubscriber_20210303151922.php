<?php


namespace App\Events;

use DateTimeImmutable;
use App\Entity\Invoice;
use App\Repository\InvoiceRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class InvoiceChronoSubscriber implements EventSubscriberInterface
{
    private $security;
    private $repository;

    public function __construct(Security $security, InvoiceRepository $repository)
    {
        $this->security = $security;
        $this->repository = $repository;
    }
    
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setChronoForInvoice', EventPriorities::PRE_VALIDATE]
        ];
    }

    public function setChronoForInvoice(ViewEvent $event)
    {

        $invoice = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        /** @var User $user */
        $user = $this->security->getUser();

        if (!$user->getCustomers()->contains($invoice->getCustomer())) {
            throw new AccessDeniedHttpException();
        }

        if ($invoice instanceof Invoice && $method === Request::METHOD_POST){
            $invoice->setReference(
                $this->invoiceRepository->findNextReference($user)
        )
        ->setSentAt(new \DateTimeImmutable())
        ->setStatus(Invoice::INVOICE_SENT);
        }
                
    }
}
