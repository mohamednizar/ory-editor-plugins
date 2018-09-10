import { css } from 'emotion'
import React, { Component } from 'react'

export class Feedback extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.boxFree ? (
          <div
            className={css({
              color: this.props.isTrueAnswer ? '#95bc1a' : '#f7b07c',
              fontWeight: 'bold',
              textAlign: 'right'
            })}
          >
            {this.props.children}
          </div>
        ) : (
          <div
            className={css({
              backgroundColor: '#fcf8e3',
              borderColor: '#faebcc',
              color: '#8a6d3b',
              padding: '15px'
            })}
          >
            {this.props.children}
          </div>
        )}
      </React.Fragment>
    )
  }
}
