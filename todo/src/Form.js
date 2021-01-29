import React from 'react'

class Form extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      inputArea: {
        name: '',
        description: '',
        tag: '',
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.temps !== this.props.temps) {
      this.setState({ inputArea: this.props.temps })
    }
  }

  handleChange = (event) => {
    const { inputArea } = this.state
    const inputValue = inputArea
    const { name, value } = event.target
    inputValue[name] = value
    this.setState({
      inputArea: inputValue
    })
  }

  render() {
    const { name, description, tag } = this.state.inputArea;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(this.state.inputArea)
      }}>
        <input placeholder="Enter new TODO here" type="text" name="name" value={name} onChange={this.handleChange} />
        <input placeholder="Enter description" type="text" name="description" value={description} onChange={this.handleChange} />
        <select name="tag" value={tag} onChange={this.handleChange}>
          <option value="">-- Please Choose tag --</option>
          <option value="bug">bug</option>
          <option value="test">test</option>
          <option value="normal">normal</option>
          <option value="error">error</option>
        </select>

        {(this.props.temps.name) ? <button type="submit" name="update">Update</button> : <button type="submit" name="submit">Submit</button>}

        <button type="reset" onClick={this.clearForm} >Reset</button>
      </form>
    )
  }
}

export default Form

