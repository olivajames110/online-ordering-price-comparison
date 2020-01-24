import React, { Component } from 'react';
import './slider.css';

const Slider = (props) => {
	const fill = props.dynamicNumber / props.maxAmt * 100;
	const {
		title,
		description,
		minAmt,
		maxAmt,
		defaultValue,
		numberValueDesc,
		dynamicNumber,
		handleNumberUpdate
	} = props;
	const ex = `linear-gradient(90deg, var(--priceCalcSliderGreen) ${fill}%, rgb(215, 220, 223) ${fill}%)`;

	return (
		<div className="range-slider-wrapper">
			<div className="upper-portion">
				<div className="range-description">
					<h2>{title}</h2>
					<span>{description}</span>
					<span onChange={props.updateFillAmt} className="dynamic-number-value">
						<span>
							{props.isPercent ? '$' : null}
							{dynamicNumber}
						</span>
					</span>
					<span>{numberValueDesc}</span>
				</div>
				{/* <span id="rs-bullet--price" class="rs-label" style="left: 43.61%;">$98</span> */}
			</div>
			<div className="input-slider-portion____">
				<input
					onChange={handleNumberUpdate}
					className="range-slider__range"
					type="range"
					defaultValue={defaultValue}
					min={minAmt}
					max={maxAmt}
					style={{
						background : ex
					}}
				/>

				<div className="box-minmax-key">
					<span>
						{props.isPercent ? '$' : null}
						{minAmt}
					</span>
					<span>
						{props.isPercent ? '$' : null}
						{maxAmt}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Slider;
