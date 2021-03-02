<?php


namespace App\Controller;

use App\Entity\Invoice;


class InvoiceIncrementationController
{

    public function FunctionName(Type $var = null)
    {
        # code...
    }

    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);
    }
}