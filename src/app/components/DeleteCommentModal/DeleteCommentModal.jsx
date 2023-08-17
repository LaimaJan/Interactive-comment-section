import React from 'react';

function DeleteCommentModal({ isOpen, onCancel, onDelete }) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="text-container">
					<p className="modal-header">Delete comment</p>
					<p className="modal-text">
						Are you sure you want to delete this comment? This will remove the
						comment and can't be undone.
					</p>
				</div>
				<div className="button-container">
					<button onClick={onCancel}>NO, CANCEL</button>
					<button onClick={onDelete}>YES, DELETE</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteCommentModal;
