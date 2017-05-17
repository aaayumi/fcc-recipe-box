import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import BookList from '../containers/recipe_list';
import BookDetail from '../containers/recipe_detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>Recipe Box</h1>
                <input type="button" value="Add Recipe" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Recipe</h1>
                        <p>Ingredients</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
                <BookDetail />
                <BookList />  
            </section>
        );
    }
}

export default App;