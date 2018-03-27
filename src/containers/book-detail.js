import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}
		return (
			<div>
				<h3>Details For: {this.props.book.title} </h3>
				<div>
					<p>Auther: {this.props.book.author}</p>
					<p>Price: {this.props.book.price}</p>
					<p>Pages: {this.props.book.pages}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// Application State
	return {
		book: state.activeBook,
	};
}

export default connect(mapStateToProps)(BookDetail);
