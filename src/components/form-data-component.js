import React, { Component } from 'react';


export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            comment: '',
          
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeComment(e) {
        this.setState({ comment: e.target.value })
    }

  

    onSubmit(e) {
            console.log(`Student successfully created!`);
             console.log(`Name: ${this.state.name}`);
        e.preventDefault()
      

        this.setState({
            name: '',
            comment: '',
           
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                comment: this.userData.comment,
               
            })
        } else {
            this.setState({
                name: '',
                comment: '',
               
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                       
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} placeholder="Name" />
                    </div>
                    <div className="form-group">
                      
                        <textarea  className="form-control" value={this.state.comment} onChange={this.onChangeComment} placeholder="Comment" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}