import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();
    
    function addMeetupHandler(meetup){
        // console.log('inside addMeetupHandler');
        // console.log(meetup);
        
        //Firebase database url : https://udemy-react-meetup-app-default-rtdb.europe-west1.firebasedatabase.app/
        fetch(
            'https://udemy-react-meetup-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');   //we use replace because we don't want to allow user to go back to a previous page after navigating to the '/' page i.e. AllMeetpsPage 
        });
    }
    
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;