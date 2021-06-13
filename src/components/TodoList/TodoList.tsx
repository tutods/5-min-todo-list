import {
	Card,
	CardActions,
	CardContent,
	Container,
	IconButton,
	TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { ChangeEvent, useState } from 'react';
import { AiFillDelete, AiOutlineAppstoreAdd } from 'react-icons/ai';

type ToDoItem = {
	id: number;
	value: string;
};

let count = 1;

const StyledCard = withStyles({
	root: {
		margin: '20px'
	}
})(Card);

const StyledContainer = withStyles({
	root: {
		padding: '20px'
	}
})(Container);

const StyledTextInput = withStyles({
	root: {
		width: '100%'
	}
})(TextField);

const TodoList = () => {
	const [list, setList] = useState<ToDoItem[]>([{ id: 0, value: '' }]);

	const handleChange = (value: string, id: ToDoItem['id']) => {
		setList((prev) =>
			prev.map((item) => (item.id === id ? { ...item, value } : item))
		);
	};

	const handleDelete = (id: ToDoItem['id']) => {
		setList((prev) => prev.filter((item) => item.id !== id));
	};

	const handleAdd = (index: number) => {
		const newItem = { id: count++, value: '' };

		setList((prev) => [
			...prev.slice(0, index + 1),
			newItem,
			...prev.slice(index + 1)
		]);
	};

	return (
		<StyledContainer maxWidth="sm">
			{list.map((item, index) => (
				<StyledCard key={index}>
					<CardContent>
						<StyledTextInput
							placeholder="Insert your to-do"
							value={item.value}
							onChange={(evt: ChangeEvent<HTMLInputElement>) =>
								handleChange(evt.currentTarget.value, item.id)
							}
						/>
					</CardContent>
					<CardActions>
						<IconButton onClick={() => handleAdd(index)}>
							<AiOutlineAppstoreAdd />
						</IconButton>
						{list.length > 1 && (
							<IconButton
								color="secondary"
								onClick={() => handleDelete(item.id)}
							>
								<AiFillDelete />
							</IconButton>
						)}
					</CardActions>
				</StyledCard>
			))}
		</StyledContainer>
	);
};

export default TodoList;
