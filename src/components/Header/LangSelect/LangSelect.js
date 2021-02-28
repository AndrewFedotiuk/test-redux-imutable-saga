
const LangSelect = ()=>{
	const langList = [
		'ru',
		'en'
	];
	
	return(
		<select name="en">
			{
				langList.map(lang=>(
					<option value={lang} key={lang}>{lang}</option>
				))
			}
		</select>
	)
}

export default LangSelect;
