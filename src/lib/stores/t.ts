import { derived } from 'svelte/store';
import { lang } from './lang';
import { translations } from '$lib/i18n';

export const t = derived(lang, ($lang) => translations[$lang]);