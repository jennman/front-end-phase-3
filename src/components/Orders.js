import React from "react";
import Navbar from "./Navbar";
import {
  Button,
  Form,
  Radio,
  Select,
  TextArea,
  Container
} from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
function Orders (){
    // handleChange = (e, { value }) => this.setState({ value })
    return(
        <Container id="formBackground">
            <Navbar/>
            <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    control={Select}
                    label='Base:'
                    options={options}
                    placeholder='Choose a base'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    control={Select}
                    label='Topping 1:'
                    options={options}
                    placeholder='Choose a topping'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    control={Select}
                    label='Topping 2:'
                    options={options}
                    placeholder='Choose a topping'
                />
            </Form.Group>
            <Form.Group inline>
                <label>Size</label>
                <Form.Field
                    control={Radio}
                    label='Small'
                    value='1'
                    // checked={value === '1'}
                    // onChange="{handleChange}"
                />
                <Form.Field
                    control={Radio}
                    label='Medium'
                    value='2'
                    // checked={value === '2'}
                    // onChange={handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Large'
                    value='3'
                    // checked={value === '3'}
                    // onChange={handleChange}
                />
            </Form.Group>
                <Form.Field
                control={TextArea}
                label='Aditional Comments:'
                placeholder='Write here any observation'
                />
            <Form.Field control={Button}>Submit Order</Form.Field>
            <Button>Delete Order</Button>
            <Button>Update Order</Button>
            </Form>
        </Container>
    )
}
export default Orders