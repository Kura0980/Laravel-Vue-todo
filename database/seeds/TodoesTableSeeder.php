<?php

use Illuminate\Database\Seeder;

class TodoesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //初期値
        DB::table('todoes')->insert([
            [
                "action" => "買い物",
                "done" => true,
                "group_id" => 2,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "action" => "メール",
                "done" => true,
                "group_id" => 1,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "action" => "電話",
                "done" => false,
                "group_id" => 1,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "action" => "ゲーム",
                "done" => false,
                "group_id" => 3,
                "created_at" => date('Y-m-d H:i:s')
            ]
        ]);
    }
}
