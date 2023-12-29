const FormBlock = ({ label, type, name, opts, defaultValue }) => {
	const inputClass = "w-full border";
	return (
		<p className="flex flex-col gap-4 mx-5">
			<label className="w-36 text-left" htmlFor={name}>
				{label}
			</label>
			{type === "date" && (
				<input
					type={type}
					name={name}
					className={inputClass}
					defaultValue={defaultValue}
					aria-labelledby={name}
					aria-label={name}
					id={name}
				/>
			)}
			{type === "time" && (
				<input
					type={type}
					name={name}
					className={inputClass}
					defaultValue={defaultValue}
					aria-labelledby={name}
					aria-label={name}
					id={name}
				/>
			)}
			{type === "number" && (
				<input
					type={type}
					name={name}
					{...opts}
					className={inputClass}
					defaultValue={defaultValue}
					aria-labelledby={name}
					aria-label={name}
					id={name}
				/>
			)}
			{type === "select" && (
				<select
					name={name}
					className={inputClass}
					defaultValue={defaultValue}
					aria-labelledby={name}
					aria-label={name}
					id={name}
				>
					{opts.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.name}
						</option>
					))}
				</select>
			)}
		</p>
	);
};
export default FormBlock;
