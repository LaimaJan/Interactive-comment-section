import JuliusImage from '../../../../public/images/avatars/image-juliusomo.png';
import './CommentsForm.css';
import { useState } from 'react';

function CommentsForm({ handleSubmit, submitLabel, initialText = '' }) {
	const [text, setText] = useState(initialText);
	const onSubmit = (event) => {
		event.preventDefault();
		handleSubmit(text);
		setText('');
	};

	return (
		<>
			<form onSubmit={onSubmit} className="comments-form">
				<div className="comments-form-img-container show">
					<img
						src={JuliusImage}
						alt={`Julius image`}
						className="comments-form-img"
					/>
				</div>

				<textarea
					className="comment-form-textarea"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<div className="comments-form-send-btn-container show">
					<button className="comment-form-send-btn">{submitLabel}</button>
				</div>
				<div className=" comment-form-image-send-btn display">
					<img
						src={JuliusImage}
						alt={`Julius image`}
						className="comments-form-img display"
					/>
					<button className="comment-form-send-btn display">
						{submitLabel}
					</button>
				</div>
			</form>
		</>
	);
}

export default CommentsForm;