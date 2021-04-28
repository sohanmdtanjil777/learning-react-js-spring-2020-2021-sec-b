import {useState} from 'react';
//import {notes} from '../userNotes';
import {useParams} from 'react-router-dom';
import './form.css';

const Add_user_day_note = ({addUserNote})=> {

    //const {id:eid}  = useParams();
    const [newUserNote, setNewNote] = useState({
        id: '',
        name: '',
        date: '',
        note_details: '',
        comments: '',
    });

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user_note = {...newUserNote, [attar] : value}; 
        setNewNote(user_note);
    }

    const formSubmit=(e)=>{
        e.preventDefault();

        addUserNote(newUserNote);

        setNewNote({
              id: '',
              name: '',
              date: '',
              note_details: '',
              comments: '',

        })
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={newUserNote.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={newUserNote.name} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>DATE</td>
                            <td>
                                <input type="date" name="date" value={newUserNote.date} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Note Details</td>
                            <td>
                                <textarea rows="4" cols="50" name="note_details" value={newUserNote.note_details} onChange={changeUser} > </textarea> 
                            </td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>
                                <input type="text" name="comments" value={newUserNote.comments} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Add_user_day_note;