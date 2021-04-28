        

export default function All_User_Notes({id, name, date, note_details, comments, created_at, updated_at, deleteUserNotes}){
	return (
		<div className='usermain'>
			<h3>DATE: {date}</h3>
			<p>
				NAME: {name} <br/>
				NOTE DETAILS: {note_details} <br/>
				COMMENTS: {comments} <br/>
			</p>			
			<button onClick={()=>deleteUserNotes(id)}>Delete This Note</button>
		</div>
	)
};