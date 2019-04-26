import {VueConstructor} from 'vue';
import {hello} from './second';

const win = window as any;
(win.vueComps = (win.vueComps || [])).push((Vue: VueConstructor) => {
	Vue.component('tags-input', {
		data: () => {
			return {
				isOpen: false,
				str: '',
			};
		},
		methods: {
			toggle() {
				this.str = hello('a');
				this.isOpen = !this.isOpen;
			},
		},
		template: '<div><slot v-bind:parent="this"/></div>',
	});
});
