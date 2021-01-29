import React, { useEffect } from 'react'

function Form2(props) {


    useEffect(() => {

        document.getElementById("form")[0].value = props.editData.name
        document.getElementById("form")[1].value = props.editData.description
        document.getElementById("form")[2].value = props.editData.tag
    }
    )



    return (
        <div >
            <form id="form" onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(document.getElementById("form"));
            }}>
                <input placeholder="Enter new TODO here" type="text" name="name" />
                <input placeholder="Enter description" type="text" name="description" />
                <select name="tag" >
                    <option value="">-- Please Choose tag --</option>
                    <option value="bug">bug</option>
                    <option value="test">test</option>
                    <option value="normal">normal</option>
                    <option value="error">error</option>
                </select>

                {/* {(this.props.temps.name) ? <button type="submit" name="update">Update</button> : <button type="submit" name="submit">Submit</button>}
                <button type="reset" onClick={this.clearForm} >Reset</button> */}

                <button type="submit" name="update">Update</button>

            </form>
        </div>
    )
}

export default Form2
