<?php

use App\Http\Controllers\CategoryController;
// use Illuminate\Support\Facades\Route;

Route::get ('/', function(){
    return'hello';
});

Route::get ('category', [CategoryController::class, 'indexAction']);
Route::any('category/create', [CategoryController::class, 'createCategory'])->name('createCategory');


Route::post('/api/contact/', [ContactController::class, 'sendContactForm']);