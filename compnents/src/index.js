import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<>
			<ApprovalCard>
				<CommentDetail
					icon={faker.image.image()}
					author='Sam'
					postTime='4:00'
					commentText='Awesome stuff!!!'
				/>
			</ApprovalCard>
			<CommentDetail
				icon={faker.image.image()}
				author='Alex'
				postTime='6:00'
				commentText='Cool story!'
			/>
			<CommentDetail
				icon={faker.image.image()}
				author='Beans'
				postTime='7:00'
				commentText='nice post'
			/>
		</>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
