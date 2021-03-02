<?php


namespace App\Controller;

use App\Entity\Invoice;


class InvoiceIncrementationController
{

    public function __construct(EntityManagerInter)
    {
        # code...
    }

    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);
    }
}