export function Input({
	value,
	onChange,
	label,
	id,
	element,
	disabled,
}: IInputProps) {
	const handleChangeValue = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		onChange(event.currentTarget.value);
	};

	return (
		<div className='relative w-full'>
			{element === 'textarea' ? (
				<textarea
					id={id}
					value={value}
					onChange={(e) => handleChangeValue(e)}
					name={id}
					rows={4}
					disabled={disabled}
					className={`peer w-full resize-none rounded-lg border-2 border-transparent px-4  pt-2   placeholder-transparent focus:border-blue-600 focus:outline-none ${
						disabled
							? 'cursor-not-allowed bg-neutral-200 text-zinc-400 dark:bg-zinc-900 dark:text-neutral-600'
							: 'bg-neutral-100 text-zinc-900 dark:bg-zinc-800 dark:text-neutral-400'
					}`}
					placeholder='im invisible!'
				/>
			) : (
				<input
					id={id}
					value={value}
					onChange={(e) => handleChangeValue(e)}
					name={id}
					disabled={disabled}
					type='text'
					className={`peer h-12 w-full rounded-full border-2 border-transparent px-4 placeholder-transparent focus:border-blue-600 focus:outline-none ${
						disabled
							? 'cursor-not-allowed bg-neutral-200 text-zinc-400 dark:bg-zinc-900 dark:text-neutral-600'
							: 'bg-neutral-100 text-zinc-900 dark:bg-zinc-800 dark:text-neutral-400'
					}`}
					placeholder='im invisible!'
				/>
			)}

			<label
				htmlFor={id}
				className={`absolute -top-5 left-0 rounded bg-transparent px-2 text-sm text-zinc-400 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-zinc-800 dark:text-zinc-600 dark:peer-placeholder-shown:text-zinc-600 dark:peer-focus:text-zinc-200 ${
					disabled ? 'cursor-not-allowed' : 'cursor-text'
				}`}
			>
				{label}
			</label>
		</div>
	);
}

interface IInputProps {
	label: string;
	value: HTMLInputElement['value'];
	onChange: (value: string) => void;
	id: string;
	element?: 'input' | 'textarea';
	disabled: boolean;
}
