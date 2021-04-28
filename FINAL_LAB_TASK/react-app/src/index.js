import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import {notes} from './userNotes';
import Navbar from './components/Navbar';
import All_User_Notes from './components/All_User_Notes';
import Add_user_day_note from './components/Add_user_day_note';
import {useFetch} from './components/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//const url = "https://jsonplaceholder.typicode.com/todos";
//const url = "http://localhost/webtech/h/ajax/abc.php";

function UserNotes(){
	
	//const users = useFetch(url);
	//const [name, setName] = useState('XYZ');
	const [note_list, setUserNotes] = useState(notes);

	
	const addUserNote= (newUserNote)=>{
		setUserNotes([...note_list, newUserNote]);
	}

	
	const deleteUserNotes= (id)=>{
		setUserNotes(note_list.filter((user_note)=>user_note.id !=id));
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
		                    note_list.map((user_note, index)=>{
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