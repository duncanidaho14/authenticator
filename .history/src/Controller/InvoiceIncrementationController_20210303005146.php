<?php


namespace App\Controller;

use App\Entity\Invoice;
use Doctrine\ORM\EntityManagerInterface;


class InvoiceIncrementationController
{

    public function __construct(EntityManagerInterface $manager)
    {
       $this->;
    }

    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);
    }
}