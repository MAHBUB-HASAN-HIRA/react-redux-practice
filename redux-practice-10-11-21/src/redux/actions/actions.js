import {
	decrement,
	decrement_custom,
	decrement_custom_house,
	decrement_house,
	increment,
	increment_custom,
	increment_custom_house,
	increment_house,
} from "../type/type";

export const increment_food = () => {
	return {
		type: increment,
	};
};

export const decrement_food = () => {
	return {
		type: decrement,
	};
};

export const increment_custom_food = (action) => {
	return {
		type: increment_custom,
		payload: action,
	};
};

export const decrement_custom_food = (action) => {
	return {
		type: decrement_custom,
		payload: action,
	};
};

export const increment_house_actions = () => {
	return {
		type: increment_house,
	};
};

export const decrement_house_actions = () => {
	return {
		type: decrement_house,
	};
};

export const increment_custom_house_actions = (action) => {
	return {
		type: increment_custom_house,
		payload: action,
	};
};

export const decrement_custom_house_actions = (action) => {
	return {
		type: decrement_custom_house,
		payload: action,
	};
};
