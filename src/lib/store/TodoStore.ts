import { v4 as uuidv4 } from "uuid";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const data = browser
	? JSON.parse(window.localStorage.getItem("string")) ?? []
	: //null일 경우에 빈 배열을 넣어주는 코드
	  [];

export const todos = writable(data);

//localStorage와 동기화를 아래 코드로 해줍니다.
todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem("string", JSON.stringify(value));
	}
});

export const addTodo = () => {
	todos.update((currentTodos) => {
		return [...currentTodos, { id: uuidv4(), text: "", complete: false }];
	});
};

export const deleteTodo = (id: any) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo: any) => todo.id !== id);
	});
};

export const toggleComplete = (id: any) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: any) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

export const editTodo = (id: any, text: any) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: any) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
