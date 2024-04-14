<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeSlider;
use App\Product;

class HomeController extends Controller
{
    public function getSlider()
    {
        $data = HomeSlider::orderBy('order', 'asc')->get();
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
    public function getHomeProductSlider()
    {
        $data = Product::where('home_active', '1')->orderBy('order', 'asc')->get();
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
}