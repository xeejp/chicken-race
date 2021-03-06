import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

const experiment_types = [
  "interaction",
  "interaction_with_no_information"
]

const mapStateToProps = ({ experiment_type }) => {
  return {
    experiment_type
  }
}

function getTypeText(type) {
  switch (type) {
    case "interaction":
      return "情報あり"
    case "interaction_with_no_information":
      return "情報なし"
  }
}

class TypesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locked: true
    }
  }

  changeType(event, value) {
    sendData('stop')
    sendData('changeType', value)
    this.setState(Object.assign({}, this.state, {
      locked: true
    }))
  }

  unlock() {
    this.setState(Object.assign({}, this.state, {
      locked: false
    }))
  }

  render() {
    const { experiment_type } = this.props
    const locked = this.state.locked
    return <div>
      { locked
        ? <RaisedButton
          label="Switch the experiment type"
          onClick={this.unlock.bind(this)}
          secondary={true}
        />
        : null
      }
      <RadioButtonGroup
        name="types"
        valueSelected={experiment_type}
        defaultSelected={experiment_type}
        onChange={this.changeType.bind(this)}
      >
        {experiment_types.map((type, key) => <RadioButton
          key={key}
          value={type}
          label={getTypeText(type)}
          disabled={locked}
        />)}
      </RadioButtonGroup>
    </div>
  }
}

export default connect(mapStateToProps)(TypesList)
