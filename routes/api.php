<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//branch test
//Product
Route::get('/get-products/{value}', [
    ProductController::class,
    'getProducts',
]);

//Slider
Route::get('/get-slider', [
    HomeController::class,
    'getSlider',
]);

Route::get('/get-prodcut-slider', [
    HomeController::class,
    'getHomeProductSlider',
]);

//Sayfalar
Route::get('/get-page/{slug}', [
    PageController::class,
    'getPage',
]);