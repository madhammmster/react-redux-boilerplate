import React from "react";
import {Container, Header, Icon, Segment} from "semantic-ui-react";
import FaBeer from 'react-icons/lib/fa/beer';

class Main extends React.Component {

    render(){
        return(
            <Segment vertical>
                <Container>
                    <Header as='h2'>
                        <Icon>
                            <FaBeer />
                        </Icon>
                        <Header.Content>
                            Demo view
                            <Header.Subheader>
                                This is demo view
                            </Header.Subheader>
                        </Header.Content>
                    </Header>

                </Container>
            </Segment>
        )
    }

}

export default Main;