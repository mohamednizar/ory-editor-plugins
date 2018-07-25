import { createEditableIdentifier } from '@splish-me/editor/dist/editable.component'
import * as React from 'react'

import SCExercise from './SCExercise'
import plugin from './plugin'

export default {
  ...plugin,
  Component: SCExercise,
  IconComponent: <img src={null} />,
  text: 'Single Choice Aufgabe',
  createInitialState: () => ({
    type: 'multiple',
    question: createEditableIdentifier(),
    answers: [
      {
        id: createEditableIdentifier(),
        isCorrect: false,
        feedback: null
      }
    ]
  })
}