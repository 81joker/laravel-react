<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\Http\Resources\UserResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
            'due_date' =>(new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
            'status' => $this->status,
            'imagPath' => $this->imag_path,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
            // 'user' => new UserResource($this->whenLoaded('user')),
            // 'tasks' => TaskResource::collection($this->whenLoaded('tasks')),
            // 'tasks_count' => $this->whenLoaded('tasks_count'),
            // 'tasks_completed_count' => $this->whenLoaded('tasks_completed_count'),
            // 'tasks_incomplete_count' => $this->whenLoaded('tasks_incomplete_count'),
            // 'tasks_completed_percentage' => $this->whenLoaded('tasks_completed_percentage'),
    
        ];
    }
}
