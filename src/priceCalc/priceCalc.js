import React, { Component, Fragment } from 'react';
import Slider from './components/slider/slider';
import Competitors from './components/competitors/competitors';
import './css/priceCalcMain.css';

class PriceCalc extends Component {
	state = {
		pricePerOrder       : 100,
		ordersPerWeek       : 50,
		pricePerOrderAmount : 100,
		companies           : [
			{ name: 'GrubHub', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Eat Street', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Menufy', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Uber Eats', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Door Dash', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Slice', fee: null, specialInformation: null, isPercent: null, annualCost: 0 }
		]
	};

	componentDidMount() {
		this.handleAnnualCost();
	}

	updatePricePerOrder = (e) => {
		this.setState({
			pricePerOrder : e.target.value
		});

		this.handleAnnualCost();
	};

	updateOrdersPerWeek = (e) => {
		this.setState({
			ordersPerWeek : e.target.value
		});

		this.handleAnnualCost();
	};

	handleAnnualCost = () => {
		let weeks = 52;
		this.setState({
			companies : [
				{
					name               : 'GrubHub',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * this.state.pricePerOrder * this.state.ordersPerWeek
				},
				{
					name               : 'Eat Street',
					fee                : 0.12,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.12 * this.state.pricePerOrder * this.state.ordersPerWeek
				},

				{
					name               : 'Menufy',
					fee                : 1.5,
					specialInformation : 'Passed To Customer',
					isPercent          : false,
					annualCost         : 1.5 * weeks * this.state.ordersPerWeek
				},
				{
					name               : 'Uber Eats',
					fee                : 0.3,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.3 * this.state.pricePerOrder * this.state.ordersPerWeek
				},
				{
					name               : 'Door Dash',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * this.state.pricePerOrder * this.state.ordersPerWeek
				},
				{
					name               : 'Slice',
					fee                : 1.95,
					specialInformation : 'Passed To Customer',
					isPercent          : false,
					annualCost         : Math.round(1.95 * weeks * this.state.ordersPerWeek)
				}
			]
		});
	};

	render() {
		return (
			<Fragment>
				<div class="range-widget-container">
					<div className="bg" />
					<div className="range-widget-container">
						<div className="intro-header">
							<h1>Online Ordering Commission Calculator</h1>
							<h3 className="description">
								How much money are you giving away to various third-party online ordering companies?
							</h3>
						</div>
						<div className="range-container">
							<Slider
								title={'Order Price'}
								description={'The average price of an order placed online is about'}
								minAmt={'0'}
								maxAmt={'200'}
								defaultValue={this.state.pricePerOrder}
								numberValueDesc={'per order.'}
								dynamicNumber={this.state.pricePerOrder}
								handleNumberUpdate={this.updatePricePerOrder}
								isPercent={true}
							/>
							<Slider
								title={'Weekly Order Amount'}
								description={'In one week, I typically receive an average of about'}
								minAmt={'0'}
								maxAmt={'500'}
								defaultValue={this.state.ordersPerWeek}
								numberValueDesc={'online orders.'}
								dynamicNumber={this.state.ordersPerWeek}
								handleNumberUpdate={this.updateOrdersPerWeek}
								isPercent={false}
							/>
						</div>
						<Competitors companies={this.state.companies} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default PriceCalc;
