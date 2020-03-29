import React from 'react';
import classes from './Contacts.module.css';
import Contact from "./Contact/Contact";

const Contacts = (props) => {

    let contacts = props.state.contactsData.map( contact => <Contact name={contact.name} avatar={contact.avatarUrl} id={contact.id} /> );

    return (
        <div className={classes.contacts}>
            <h4>Contacts</h4>
            {contacts}
        </div>
    );
}

export default Contacts;