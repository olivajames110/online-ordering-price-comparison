import React, { Component, Fragment } from 'react';
import Slider from './components/slider/slider';
import Competitors from './components/competitors/competitors';
import './css/priceCalcMain.css';

class PriceCalc extends Component {
	state = {
		pricePerOrder : 100,
		ordersPerWeek : 50,
		companies     : [
			{ name: 'GrubHub', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Eat Street', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Menufy', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Uber Eats', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Door Dash', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Slice', fee: null, specialInformation: null, isPercent: null, annualCost: 0 }
		]
	};

	componentDidMount() {
		this.handleAnnualCost(this.state.pricePerOrder, this.state.ordersPerWeek);
	}

	updatePricePerOrder = (e) => {
		let num = e.target.value;
		this.setState({
			pricePerOrder : e.target.value
		});

		this.handleAnnualCost(num, this.state.ordersPerWeek);
	};

	updateOrdersPerWeek = (e) => {
		let num = e.target.value;

		this.setState({
			ordersPerWeek : e.target.value
		});

		this.handleAnnualCost(this.state.pricePerOrder, num);
	};

	handleAnnualCost = (price, quantity) => {
		let weeks = 52;
		this.setState({
			companies : [
				{
					name               : 'GrubHub',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * price * quantity
				},
				{
					name               : 'Eat Street',
					fee                : 0.12,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.12 * price * quantity
				},

				{
					name               : 'Menufy',
					fee                : 1.5,
					specialInformation : 'Passed To Customer',
					isPercent          : false,
					annualCost         : 1.5 * weeks * quantity
				},
				{
					name               : 'Uber Eats',
					fee                : 0.3,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.3 * price * quantity
				},
				{
					name               : 'Door Dash',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * price * quantity
				},
				{
					name               : 'Slice',
					fee                : 1.95,
					specialInformation : false,
					isPercent          : false,
					annualCost         : Math.round(1.95 * weeks * quantity)
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
