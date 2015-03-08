import * as babel from 'babel/polyfill'
import React from 'react'

import { one } from './helper.js'

React.render(<h1>This is a test! {one()}</h1>, document.body);
