<?php

namespace App\Models;

use Illuminate\Database\Eloquest\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'slug', 'parent_id'];
    
    public function subcategory()
    {
        return $this->hasMany(\App\Models\Category::class, 'parentid');
        
    }
    
    public function parent()
    {
        return $this->belongsTo(\App\Models\Category::class, 'parentid');
    }

    
}