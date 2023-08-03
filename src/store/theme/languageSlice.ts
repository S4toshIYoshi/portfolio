import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
	language: string;
}

const initialState: LanguageState = {
	language: 'RU'
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		switchLang: state => {
			state.language = state.language === 'RU' ? 'EN' : 'RU';
		}
	}
});
