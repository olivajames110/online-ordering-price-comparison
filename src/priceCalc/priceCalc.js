import React, { Component, Fragment } from 'react';
import Slider from './components/slider/slider';
import Competitors from './components/competitors/competitors';
import './css/priceCalcMain.css';

class PriceCalc extends Component {
	state = {
		pricePerOrder : 100,
		ordersPerWeek : 50,
		companies     : []
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
		let priceMultiplier = price * quantity;
		let weeksMultiplier = weeks * quantity;
		this.setState({
			companies : [
				{
					name               : 'GrubHub',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * priceMultiplier
				},
				{
					name               : 'Eat Street',
					fee                : 0.12,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.12 * priceMultiplier
				},

				{
					name               : 'Menufy',
					fee                : 1.5,
					specialInformation : 'Passed To Customer',
					isPercent          : false,
					annualCost         : 1.5 * weeksMultiplier
				},
				{
					name               : 'Uber Eats',
					fee                : 0.3,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.3 * priceMultiplier
				},
				{
					name               : 'Door Dash',
					fee                : 0.2,
					specialInformation : false,
					isPercent          : true,
					annualCost         : weeks * 0.2 * priceMultiplier
				},
				{
					name               : 'Chow Now',
					fee                : 199,
					specialInformation : 'Requires Annual Contract',
					isPercent          : false,
					annualCost         : 2388
				},
				{
					name               : 'BentoBox',
					fee                : 0.99,
					specialInformation : false,
					isPercent          : false,
					annualCost         : 0.99 * weeksMultiplier
				},
				{
					name               : 'Slice',
					fee                : 1.95,
					specialInformation : false,
					isPercent          : false,
					annualCost         : Math.round(1.95 * weeksMultiplier)
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
							<h1>See Your Savings</h1>
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
								title={'Order Quantity'}
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
