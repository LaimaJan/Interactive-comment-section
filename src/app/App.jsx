import './App.css';
import Comments from './components/Comments/Comments';

import { getComments } from '../data.jsx';
import React, { useState, useEffect } from 'react';

function App() {
	return (
		<div className="App">
			<Comments currentUserId="4" />
		</div>
	);
}

export default App;
