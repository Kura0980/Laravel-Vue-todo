<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use App\Http\Controllers\Controller;


class TodoesController extends Controller
{
    //
    public function index() {
        $todoes = Todo::select('todoes.action', 'todoes.done', 'groups.name as group_name')
                    ->join('groups', 'todoes.group_id', '=', 'groups.id')
                    ->get();

        $todo_list = [
            'work' => [],
            'life' => [],
            'play' => [],
            'special' => []
        ];

        foreach ($todoes as $todo) {
            $todo_list[$todo['group_name']][] = $todo;
        }

        return $todo_list; 
    }
}
