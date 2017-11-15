import {type} from './mutation-types.js'

export default {
	[type.ADD_PRODUCT](state){
		state.addProductStatus = !state.addProductStatus;
	}
}
