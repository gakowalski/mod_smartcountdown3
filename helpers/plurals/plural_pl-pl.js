function smartcountdown_plural(n) {
	switch (n) {
		case 1:
			return '_1';
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
		case 52:
		case 53:
		case 54:
		 	return '_2';
		default:
			return '';
	}
}
