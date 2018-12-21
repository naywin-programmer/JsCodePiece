// ### https://github.com/naywin-programmer/JsCodePiece

const JsCodePiece = {
	"jsonparse": function jsonparse(val) {
		return JSON.parse(JSON.stringify(val));
	},
	"copyref": function (val) {
		if(typeof(val) === 'object') {
			if(val instanceof Array) {
				let {copy} = this.jsonparse({copy: val});
				return copy;
			}
			return this.jsonparse(val);
		}

		console.error(`Please provide object or array data type. Given data type => ${typeof(val)}`);
		return false;
	}
}