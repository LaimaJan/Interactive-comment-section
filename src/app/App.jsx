import './App.css';
import DeleteIcon from './images/icons/icon-delete.svg';
import EditIcon from './images/icons/icon-edit.svg';
import MinusIcon from './images/icons/icon-minus.svg';
import PlusIcon from './images/icons/icon-plus.svg';
import ReplyIcon from './images/icons/icon-reply.svg';

import AmyRobinsonAvatar from './images/avatars/image-amyrobson.png';
import JuliusMomoAvatar from './images/avatars/image-juliusomo.png';
import MaxBlagunAvatar from './images/avatars/image-maxblagun.png';
import RamsesMironAvatar from './images/avatars/image-ramsesmiron.png';

function App() {
	return (
		<div className="App">
			{/* First comment */}

			<div className="comment">
				<div className="rating show">
					<button>
						<img src={PlusIcon} alt="Plus icon" className="plus-icon icon" />
					</button>

					<p>12</p>
					<button>
						<img src={MinusIcon} alt="Minus icon" className="minus-icon icon" />
					</button>
				</div>
				<div className="comment-content">
					<div className="user-info">
						<div className="user">
							<img src={AmyRobinsonAvatar} alt="Amy Robinson Avatar" />
							<p className="user-name">amyrobinson</p>
							<p className="user-date">1 month ago</p>
						</div>
						<div className="reply-btn show">
							<button>
								<img src={ReplyIcon} alt="Reply icon" />
								Reply
							</button>
						</div>
					</div>
					<p className="users-comment">
						Impressive! Though it seems the drag feature could be improved. But
						overall it looks incredible. You've nailed the design and the
						responsiveness at various breakpoints works really well.
					</p>

					{/* Displaying when width is 375px */}
					<div className="comment-info">
						<div className="comment-info-content">
							<div className="comment-rating">
								<button>
									<img
										src={PlusIcon}
										alt="Plus icon"
										className="plus-icon icon"
									/>
								</button>

								<p>12</p>
								<button>
									<img
										src={MinusIcon}
										alt="Minus icon"
										className="minus-icon icon"
									/>
								</button>
							</div>
							<div className="comment-reply-btn">
								<button>
									<img src={ReplyIcon} alt="Reply icon" />
									Reply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Second comment */}
			<div className="comment">
				<div className="rating">
					<button>
						<img src={PlusIcon} alt="Plus icon" className="plus-icon icon" />
					</button>

					<p>5</p>
					<button>
						<img src={MinusIcon} alt="Minus icon" className="minus-icon icon" />
					</button>
				</div>
				<div className="comment-content">
					<div className="user-info">
						<div className="user">
							<img src={MaxBlagunAvatar} alt="Max Blagun Avatar" />
							<p className="user-name">maxblagun</p>
							<p className="user-date">2 weeks ago</p>
						</div>
						<div className="reply-btn">
							<button>
								<img src={ReplyIcon} alt="Reply icon" />
								Reply
							</button>
						</div>
					</div>
					<p className="users-comment">
						Woah, your project looks awesome! How long have you been coding for?
						I'm still new, but think I want to dive into React as well soon.
						Perhaps you can give me an insight on where I can learn React?
						Thanks!
					</p>

					{/* Displaying when width is 375px */}
					<div className="comment-info">
						<div className="comment-info-content">
							<div className="comment-rating">
								<button>
									<img
										src={PlusIcon}
										alt="Plus icon"
										className="plus-icon icon"
									/>
								</button>

								<p>12</p>
								<button>
									<img
										src={MinusIcon}
										alt="Minus icon"
										className="minus-icon icon"
									/>
								</button>
							</div>
							<div className="comment-reply-btn">
								<button>
									<img src={ReplyIcon} alt="Reply icon" />
									Reply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="reply">
				<hr className="reply-divider" />
				<div className="comment">
					<div className="rating">
						<button>
							<img src={PlusIcon} alt="Plus icon" className="plus-icon icon" />
						</button>

						<p>4</p>
						<button>
							<img
								src={MinusIcon}
								alt="Minus icon"
								className="minus-icon icon"
							/>
						</button>
					</div>
					<div className="comment-content">
						<div className="user-info">
							<div className="user">
								<img src={RamsesMironAvatar} alt="Ramses Miron Avatar" />
								<p className="user-name">ramsesmiron</p>
								<p className="user-date">1 weeks ago</p>
							</div>
							<div className="reply-btn">
								<button>
									<img src={ReplyIcon} alt="Reply icon" />
									Reply
								</button>
							</div>
						</div>
						<p className="users-comment">
							Woah, your project looks awesome! How long have you been coding
							for? I'm still new, but think I want to dive into React as well
							soon. Perhaps you can give me an insight on where I can learn
							React? Thanks!
						</p>

						{/* Displaying when width is 375px */}
						<div className="comment-info">
							<div className="comment-info-content">
								<div className="comment-rating">
									<button>
										<img
											src={PlusIcon}
											alt="Plus icon"
											className="plus-icon icon"
										/>
									</button>

									<p>12</p>
									<button>
										<img
											src={MinusIcon}
											alt="Minus icon"
											className="minus-icon icon"
										/>
									</button>
								</div>
								<div className="comment-reply-btn">
									<button>
										<img src={ReplyIcon} alt="Reply icon" />
										Reply
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Add comment */}
			<div className="add-comment">
				<img
					src={JuliusMomoAvatar}
					alt="Julius Momo Avatar"
					className="commenter-avatar hide"
				/>
				<textarea placeholder="Add a comment..."></textarea>
				<div className="send-btn">
					{/* Displaying when width is 375px */}
					<img
						src={JuliusMomoAvatar}
						alt="Julius Momo Avatar"
						className="commenter-avatar show"
					/>
					<button>Send</button>
				</div>
			</div>
		</div>
	);
}

export default App;
