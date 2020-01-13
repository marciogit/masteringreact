import React, { useState } from 'react';
import JogoBinario from './components/JogoBinario'

function App() {

	const [showComponent, setComponent] = useState('mainApp');

	const voltar = () => {
		setComponent('mainApp');
	}

	const joguinhobinario = () => {
		setComponent('jogobinario')
	}

	if(showComponent === 'jogobinario') {
		return (
			<div>
				<JogoBinario/>
				<button onClick={voltar}>voltar</button>
			</div>
		)
	}

	return (
		<div>
			<h1>Mastering ReactJs</h1>
			<hr/>
			<button onClick={joguinhobinario}>Joguinho Binário</button>
		</div>
	);
}

export default App;
