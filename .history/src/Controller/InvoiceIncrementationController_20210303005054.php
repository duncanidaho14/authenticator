<?php


namespace App\Controller;

use App\Entity\Invoice;


class InvoiceIncrementationController
{

    fun

    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);
    }
}