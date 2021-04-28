<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\digital_diary;

class digital_diaryController extends Controller
{
    

    public function insert_person_daily_notes(){


            //$day_note = new digital_diary();


            //day_note->save();

    }

    public function get_person_notes(){


          $notes = digital_diary::all();

          //echo "Allah is ALLmighty";
        
          return $notes;

    }

    public function delete_person_notes(){


            //$all_person_info = digital_diary::where()->paginate(2);

    }
}
