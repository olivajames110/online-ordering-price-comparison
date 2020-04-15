import React, { Component } from 'react';
import './competitors';

export default class Competitors extends Component {
	convertFeeNumber = (num, isPercent) => {
		console.log(num, isPercent);
		if (isPercent) {
			return `${num * 100}%`;
		} else {
			return `$${num}`;
		}
	};

	render() {
		const { companies } = this.props;
		const orderezeCapPrice = 99;
		const orderezeMaxFee = orderezeCapPrice * 12;
		const companiesList = companies.map((company) => {
			return (
				<div className="competitor-container">
					<span>{company.name}</span>
					<span className="competitor-commission-amt">
						{this.convertFeeNumber(company.fee, company.isPercent)}
						{company.specialInformation ? (
							<span className="special-information">{company.specialInformation}</span>
						) : null}
					</span>
					<span style={{ color: 'var(--priceCalcCompRed)' }}>${company.annualCost.toLocaleString()}</span>
					<span style={{ color: 'var(--priceCalcCompGreen)' }}>
						${company.annualCost - orderezeMaxFee <= 0 ? (
							0
						) : (
							(company.annualCost - orderezeMaxFee).toLocaleString()
						)}
					</span>
				</div>
			);
		});

		return (
			<div className="competitor-wrapper">
				<div className="companies">
					<div className="companies-table-title">
						<h3>Online Ordering Company</h3>
						<h3>Per Order Fee</h3>
						<h3>Annual Cost From Fees</h3>
						<h3>Savings With Ordereze</h3>
					</div>
					{companiesList}
				</div>
			</div>
		);
	}
}
