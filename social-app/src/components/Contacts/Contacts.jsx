import React from 'react';
import classes from './Contacts.module.css';
import Contact from "./Contact/Contact";
import {renderContactsActionCreator} from "../../redux/contacts-reducer";

const Contacts = (props) => {

    // let state = props.dispatch(renderContactsActionCreator());
    let contacts = props.state.contactsData.map( contact => <Contact name={contact.name} avatar={contact.avatarUrl} id={contact.id} /> );

    return (
        <div className={classes.contacts}>
            <h4>Contacts</h4>
            {contacts}
        </div>
    );
};

export default Contacts;