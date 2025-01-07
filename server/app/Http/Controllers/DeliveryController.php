<?php

namespace App\Http\Controllers;

use App\Models\DeliveryInfo;
use App\Models\PackageInfo;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    public function save(Request $request) {
        try {
            $fields =$request->validate([
                'pickAddress' => 'required',
                'pickName' => 'required',
                'pickTel' => 'required',
                'pickEmail' => 'string|max:255|nullable',
                'deliAddress' => 'required',
                'deliName' => 'required',
                'deliContact' => 'required',
                'deliEmail' => 'string|max:255|nullable',
                'goodType' => 'required',
                'deliProvider' => 'required',
                'priority' => 'required',
                'pickDate' => 'required',
                'pickTime' => 'required',
                // 'packDescript' => 'required',
                // 'length' => 'required',
                // 'height' => 'required',
                // 'width' => 'required'

            ]);
    
            DeliveryInfo::create($fields);
            

            return ['message' => 'successfully !'];
        } catch (\Throwable $th) {
            return ['error' => $th];
        }
    }

   
}
