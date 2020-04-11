import React, {useState} from "react";
import {Button, Form, FormGroup} from 'reactstrap';
import humanIcon from "../resources/icons/human.png"
import mailIcon from "../resources/icons/mail.png"
import ContactFormBox from "./ContactFormBox";

const ContactForm = ({openSuccessAlert, closeSuccessAlert,
                     openDangerAlert, closeDangerAlert}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [content, setContent] = useState();

    const send = () => {
        closeSuccessAlert();
        closeDangerAlert();

        let template_params = {
            "reply_to": email,
            "from_name": name,
            "message_html": content
        };

        const service_id = "default_service";
        const template_id = "template_594ZU3dk";
        try {
            window.emailjs.send(service_id, template_id, template_params);
            openSuccessAlert();
        } catch (e) {
            closeSuccessAlert();
            openDangerAlert();
        }

    };

    function wrapFunc(func){
        return function(event){
            return func(event.target.value);
        }
    }

    return <Form className="form">
        <ContactFormBox icon={humanIcon}
                        label="Name"
                        height="40"
                        value={name}
                        onChange={wrapFunc(setName)}/>
        <ContactFormBox icon={mailIcon}
                        label="Email"
                        height="40"
                        value={email}
                        onChange={wrapFunc(setEmail)}/>
        <ContactFormBox label="Message"
                        inputType="textarea"
                        height="180"
                        value={content}
                        onChange={wrapFunc(setContent)}/>
        <FormGroup align="right">
            <Button className="contact-me-button" onClick={send}>
                <b>SEND</b>
            </Button>
        </FormGroup>
    </Form>
};

export default ContactForm;