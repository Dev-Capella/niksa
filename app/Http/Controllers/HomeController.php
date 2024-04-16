<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeSlider;
use App\Product;
use App\About;
use App\HomeSlogan;
use App\Catalog;
use App\Certificate;

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
    public function getAboutUs()
    {
        $data = About::get();
        $data = $data[0];
        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }

        return response()->json($data);
    }
    public function getHomeSlogan()
    {
        $data = HomeSlogan::get();
        $data = $data[0];
        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }

        return response()->json($data);
    }
    public function getCatalog()
    {
        $data = Catalog::first();
        $catalog_url = json_decode($data->catalog_url);

        // İlgili URL'nin düzenlenmesi
        $download_link = url('storage/' . str_replace('\\', '/', $catalog_url[0]->download_link));

        $data->catalog_url = $download_link;

        return response()->json($data);
    }
    public function getCertificate()
    {
        $data = Certificate::get();
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