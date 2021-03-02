<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use App\Entity\Customer;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        // $product = new Product();
        // $manager->persist($product);
        
        for ($c=0; $c < 30; $c++) { 
            $customer = new Customer();
            $customer->setFirstName($faker->firstName())
                     ->setLastName($faker->lastName)
                     ->setCompany($faker->company)
                     ->setEmail($faker->email);

            $manager->persist($customer);


            <for>   Cus</for>($i=0; $i < mt_rand(3, 10); $i++) {
                $invoice = new Invoice();
                $invoice->setAmount($faker->randomFloat(2, 250, 5000))
                        ->setSentAt($faker->dateTimeBetween('-6 months'))
                        ->setStatus($faker->randomElement(['SENT', 'PAID', 'CANCELLED']))
                        ->set
            }
        }
        $manager->flush();
    }
}
