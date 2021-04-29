import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from "../ui/Card";

function NewMeetupForm(props){
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const titleEntered = titleInputRef.current.value;
        const imageEntered = imageInputRef.current.value;
        const addressEntered = addressInputRef.current.value;
        const descriptionEntered = descriptionInputRef.current.value;
        

        const meetup = {
            title: titleEntered,
            image: imageEntered,
            address: addressEntered,
            description: descriptionEntered
        }

        // console.log(meetup);
        props.onAddMeetup(meetup);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;