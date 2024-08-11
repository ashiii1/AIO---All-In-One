import React, { useState } from "react";
import "./PriceSlider.css"
import MultiRangeSlider from "multi-range-slider-react";
export default function PriceSlider() {
    const [minValue, set_minValue] = useState(10);
const [maxValue, set_maxValue] = useState(20);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
    
    return (
        <div>
            <MultiRangeSlider
			min={1}
			max={35}
			step={5}
			ruler={false}
			label={true}
			preventWheel={false}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
        </div>
    )
}
