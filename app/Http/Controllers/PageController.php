<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\InfoPage;

class PageController extends Controller
{
    public function getPage($slug)
    {
        $data = InfoPage::where('slug', $slug)->get();

        return response()->json($data);
    }
}