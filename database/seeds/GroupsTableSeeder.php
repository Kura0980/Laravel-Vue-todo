<?php

use Illuminate\Database\Seeder;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //初期値
        DB::table('groups')->insert([
            [
                "name" => "work",
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "name" => "life",
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "name" => "play",
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "name" => "special",
                "created_at" => date('Y-m-d H:i:s')
            ]
        ]);
    }
}
