<?php

namespace App\Controller;



use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home_index")
     * @Route("/api/clients", name="home")
     */
    public function index(UserRepository $user): Response
    {
        

        return $this->render('home/index.html.twig', [
            
            'users' => $user
        ]);
    }
}
