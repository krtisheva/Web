import React, {Component} from 'react';
import Photo from "./Photo.jpg";
import {Row, Col} from "react-bootstrap";

class Info extends Component {
    render() {
        return (
            <Row className="mt-5">
                <div className="mt-auto ml-5 mr-5">
                    <img
                        className="d-block mr-5"
                        src = {Photo}
                        width="800"
                        align="left"
                    />
                    <h1 className="text-center text-light bg-info">Ртищева Ксения Сергеевна</h1>
                    <Row>
                        <Col>
                            <h2 className="text-left mt-3">Дата рождения:</h2>
                        </Col>
                        <Col>
                            <h2 className="text-right text-danger mt-3">11.12.2000</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="text-left mt-3">Место рождения:</h2>
                        </Col>
                        <Col>
                            <h2 className="text-right text-danger mt-3">Казахстан, г. Зыряновск</h2>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <h2 className="text-left mt-3">Место жительства:</h2>
                        </Col>
                        <Col>
                            <h2 className="text-right text-danger mt-3">Новосибирск</h2>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <h2 className="text-left mt-3">Место обучения:</h2>
                        </Col>
                        <Col>
                            <h2 className="text-right text-danger mt-3">НГТУ, ФПМИ, ПМ-81</h2>
                        </Col>
                    </Row>
                    <h2 className="text-right text-light bg-info mt-5">Информация обо мне:</h2>
                    <h3 className="text-left mr-4 mt-4"> На данный момент я учусь на 3 курсе в НГТУ на факультете
                        прикладной математики и информатики. На мой взляд, данный факультет можно отнести к одним из самых сложных.
                        Учиться здесь тяжело, но интересно. В целом, я справляюсь =).
                        В свободное от учебы время я люблю рисовать, смотреть фильмы, заниматься спортом: бегать,
                        кататься на сноуборде. В школе занималась легкой атлетикой.
                        Очень люблю своего домашнего питомца - кота Мишу.
                    </h3>
                </div>
            </Row>
        );
    }
}

export default Info;