<?php

namespace App\Controller;

use EasyCorp\Bundle\EasyAdminBundle\Controller\AdminController as BaseAdminController;

class AdminController extends BaseAdminController
{
    public function repository($className)
    {
        return $this->getDoctrine()->getRepository($className);
    }


}
