import React from "react";
import FaBeer from 'react-icons/lib/fa/beer';
import {Button, Container, Header, Icon, Modal, Segment, Table} from 'semantic-ui-react';
import LoginForm from "../components/Forms/LoginForm/LoginForm";


class Main extends React.Component {

    state = {
        openModal: false
    }

    openModal = () => this.setState({openModal: true})
    closeModal = () => this.setState({openModal: false})

    submit = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <Segment vertical>
                    <Container>
                        <Header as='h2'>
                            <Icon>
                                <FaBeer/>
                            </Icon>
                            <Header.Content>
                                Main view
                                <Header.Subheader>
                                    This is example of Semantic-UI and their components (modal, table, header, forms)
                                </Header.Subheader>
                            </Header.Content>
                        </Header>

                    </Container>
                </Segment>
                <Segment vertical>
                    <Container>

                        <Button.Group floated='right' size='mini'>
                            <Button
                                onClick={this.openModal}
                            >Add news</Button>
                        </Button.Group>

                        <Modal

                            size='small'
                            open={this.state.openModal}
                            onClose={this.closeModal}
                        >
                            <Modal.Header>Select a Photo</Modal.Header>
                            <Modal.Content>

                                <LoginForm
                                    onSubmit={this.submit}
                                />

                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>

                        <Table basic='very'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                    <Table.HeaderCell>Notes</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                    <Table.Cell>Requires call</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell>Denied</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                    </Container>
                </Segment>
            </div>
        )
    }

}

export default Main;