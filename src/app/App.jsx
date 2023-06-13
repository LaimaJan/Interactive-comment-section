import './App.css';
import Comment from './components/Comment/Comment';
import Reply from './components/Reply/Reply';
import JuliusComments from './components/JuliusComments/JuliusComents';

import data from '../data.json';

import JuliusMomoAvatar from '../../public/images/avatars/image-juliusomo.png';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [usersData, setUsersData] = useState([]);
	const [juliusComments, setJuliusComments] = useState([]);
	const [juliusComment, setJuliusComment] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [commentToDeleteId, setCommentToDeleteId] = useState(null);

	const generateUniqueId = uuidv4();

	useEffect(() => {
		const storedComments = localStorage.getItem('juliusComments');
		if (storedComments) {
			setJuliusComments(JSON.parse(storedComments));
		}

		const storedUserData = localStorage.getItem('usersData');
		if (storedUserData) {
			setUsersData(JSON.parse(storedUserData));
		}
	}, []);

	const handleCommentSubmit = () => {
		const newComment = {
			id: generateUniqueId,
			name: 'juliusmomo',
			content: juliusComment,
			rating: 0,
			date: '',
		};

		const updatedComments = [...juliusComments, newComment];
		setJuliusComments(updatedComments);
		juliusCommentsToLocalStorage(updatedComments);
		setJuliusComment('');
	};

	const deleteJuliusComment = (id) => {
		setCommentToDeleteId(id);
		setShowModal(true);
	};

	const confirmDeleteComment = () => {
		if (commentToDeleteId) {
			const updatedComments = juliusComments.filter(
				(comment) => comment.id !== commentToDeleteId
			);
			setJuliusComments(updatedComments);
			juliusCommentsToLocalStorage(updatedComments);
		}
		setShowModal(false);
		setCommentToDeleteId(null);
	};

	const cancelDeleteComment = () => {
		setShowModal(false);
		setCommentToDeleteId(null);
	};

	const updateJuliusComment = (id, editedComment) => {
		const updatedComments = juliusComments.map((comment) => {
			if (comment.id === id) {
				return {
					...comment,
					content: editedComment,
				};
			}
			return comment;
		});
		setJuliusComments(updatedComments);
		juliusCommentsToLocalStorage(updatedComments);
	};

	const juliusCommentsToLocalStorage = (comments) => {
		localStorage.setItem('juliusComments', JSON.stringify(comments));
		localStorage.setItem('usersData', JSON.stringify(data));
	};

	return (
		<div className="App">
			{/* Render the comments */}
			{usersData.map((comment, key) => (
				<Comment
					key={key}
					rating={comment.rating}
					id={comment.id}
					avatar={comment.author.image}
					userName={comment.author.name}
					userDate={comment.author.date}
					userComment={comment.content}
					mapData={usersData}
					mapDataReply={comment}
					deleteJuliusComment={() => deleteJuliusComment(comment.id)}
				/>
			))}

			{/* Render the JuliusComments */}
			{juliusComments.map((juliusComment) => (
				<JuliusComments
					key={juliusComment.id}
					rating={juliusComment.rating}
					id={juliusComment.id}
					avatar={JuliusMomoAvatar}
					userName={juliusComment.name}
					userDate="Just now"
					userComment={juliusComment.content}
					deleteJuliusComment={() => deleteJuliusComment(juliusComment.id)}
					updateJuliusComment={(id, editedComment) =>
						updateJuliusComment(juliusComment.id, editedComment)
					}
				/>
			))}

			{/* Add comment */}
			<div className="add-comment">
				<img
					src={JuliusMomoAvatar}
					alt="Julius Momo Avatar"
					className="commenter-avatar hide"
				/>
				<textarea
					placeholder="Add a comment..."
					value={juliusComment}
					onChange={(e) => setJuliusComment(e.target.value)}
				/>
				<div className="send-btn">
					{/* Displaying img when width is 375px */}
					<img
						src={JuliusMomoAvatar}
						alt="Julius Momo Avatar"
						className="commenter-avatar show"
					/>
					<button onClick={handleCommentSubmit}>Send</button>
				</div>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="modal">
					<div className="delete-card">
						<p className="modal-header">Delete comment</p>
						<p className="modal-paragraph">
							Are you sure you want to delete this comment? This will remove the
							comment and can't be undone.
						</p>
						<div className="delete-card-buttons">
							<button onClick={cancelDeleteComment}>No, cancel</button>
							<button onClick={confirmDeleteComment}>Yes, delete</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
