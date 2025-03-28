<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'status',
    ];
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];
    protected $attributes = [
        'status' => 'pending',
    ];
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
//     public function users()
//     {
//         return $this->belongsToMany(User::class);
//     }
//     public function scopeActive($query)
//     {
//         return $query->where('status', 'active');
//     }
//     public function scopeCompleted($query)
//     {
//         return $query->where('status', 'completed');
//     }
//     public function scopePending($query)
//     {
//         return $query->where('status', 'pending');
//     }
//     public function scopeOverdue($query)
//     {
//         return $query->where('end_date', '<', now());
//     }
//     public function scopeToday($query)
//     {
//         return $query->whereDate('start_date', now());
//     }
//     public function scopeThisWeek($query)
//     {
//         return $query->whereBetween('start_date', [now()->startOfWeek(), now()->endOfWeek()]);
//     }
//     public function scopeThisMonth($query)
//     {
//         return $query->whereMonth('start_date', now()->month);
//     }
//     public function scopeThisYear($query)
//     {
//         return $query->whereYear('start_date', now()->year);
//     }
}
