<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatecategoriesTable extends Migration
{
    public function up ()
    {
    Schema::create('categories', function (Blueprint $table){
        $table ->id();
        $table ->string('name');
        $table->string('slug')->unique();
        $table->integer('parent_id')->nullable();
    });
    
}
public function down()
{
    Schema::dropIfExists('categories');

    
}   
 
}