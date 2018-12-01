<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use App\Http\Controllers\Controller;


class TodoesController extends Controller
{

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
            $todo_list[$todo['group_name']][] = ['action' => $todo['action'], 'done' => $todo['done']];
        }

        return $todo_list; 
    }

    public function store (Request $request) {
        $todo = new Todo;
        $todo->action = $request->action;
        $todo->done = false;
        $todo->group_id = $request->type;
        $todo->save();
        return [ "id" => $todo->id, "action" => $todo->action, "done" => $todo->done, "group_id" => $todo->group_id];
    }
}
