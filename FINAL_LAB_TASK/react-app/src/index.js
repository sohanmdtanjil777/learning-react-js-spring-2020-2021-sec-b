import React from "react" ;
import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import {notes} from './userNotes';
import Navbar from './components/Navbar';
import All_User_Notes from './components/All_User_Notes';
import Add_user_day_note from './components/Add_user_day_note';
import {useFetch} from './components/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const url = "http://localhost:8000/api/get_person_notes";


function UserNotes(){
	
	const notes = useFetch(url);
	//console.log(notes);
	
	const [note_list, setUserNotes] = useState(notes);

    //console.log(note_list);

	
	const addUserNote= (newUserNote)=>{
		setUserNotes([...note_list, newUserNote]);
	}

	
	const deleteUserNotes= (id)=>{
		setUserNotes(note_list.filter((user_note)=>user_note.id != id));
	}

	

	return (
	
		<Router>	
				<Navbar/> 
			<Switch>
			
				<Route exact path='/'>
					<h1>Welcome To Our Virtual Diary Website!</h1>
				</Route>

				<Route path='/add_daily_note'>
					<Add_user_day_note status='add' addUserNote={addUserNote}/> 
				</Route>

				<Route path='/notelist'>
					<>
						{
		                    notes.map((user_note, index)=>{
		                      return <All_User_Notes key={index} {...user_note} deleteUserNotes={deleteUserNotes} />;
		                    })
		                }
					</>
				</Route>
				<Route path='*'> <h1>404 not found</h1></Route>
			</Switch>
			
		</Router>
	);
}

ReactDOM.render( <UserNotes/>, document.getElementById('root'))