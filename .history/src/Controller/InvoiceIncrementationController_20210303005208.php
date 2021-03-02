<?php


namespace App\Controller;

use App\Entity\Invoice;
use Doctrine\ORM\EntityManagerInterface;


class InvoiceIncrementationController
{
    private $mana
    public function __construct(EntityManagerInterface $manager)
    {
       $this->manager = $manager;
    }

    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);
    }
}