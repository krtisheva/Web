import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";

const Commentary = () => {
    const [content, setContent] = useState("");
    const [username, setName] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, content };
            const response = await fetch("http://localhost:8080/comms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Container>
            <h3 className="text-left text-light bg-info mt-5">Комментарии:</h3>
            <Row>
                <Col xs={6} sm={3}>
                    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                        <input
                            type="name"
                            className="form-control"
                            value={username}
                            onChange={e => setName(e.target.value)}
                            placeholder="Имя"
                        />
                    </form>
                </Col>
                <Col>
                    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                        <input
                            type="text"
                            className="form-control"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="Ваш комментарий"
                        />
                        <button className="btn btn-success">Добавить</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Commentary;