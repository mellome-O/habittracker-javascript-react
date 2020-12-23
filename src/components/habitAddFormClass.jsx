import React, { PureComponent } from 'react';

class HabitAddFormClass extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    
    render() {
        console.log("habitAddFormClass")
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef} 
                type="text" 
                className="add-input" 
                placeholder="Habit" 
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddFormClass; 