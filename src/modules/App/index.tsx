import {
	AppBar,
	createMuiTheme,
	CssBaseline,
	ThemeProvider,
	Toolbar,
	Typography,
	useMediaQuery
} from '@material-ui/core';
import TodoList from 'components/TodoList/TodoList';
import React from 'react';

const App = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? 'dark' : 'light'
				}
			}),
		[prefersDarkMode]
	);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">5 Minutes ToDo List</Typography>
				</Toolbar>
			</AppBar>
			<TodoList />
		</ThemeProvider>
	);
};

export default App;
