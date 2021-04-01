import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";

const ListTodos = () => {
    const [comms, setComms] = useState([]);

    const getComms = async () => {
        try {
            const response = await fetch("http://localhost:8080/comms");
            const jsonData = await response.json();

            setComms(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getComms();
    }, []);

    console.log(comms);

    return (
        <Container className="mb-5">
            {" "}
            <table class="table mt-5 text-left">
                <tbody >
                {comms.map(comment => (
                    <tr key={comment.comment_id}>
                        <td >{comment.username}: {comment.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    );
};

export default ListTodos;