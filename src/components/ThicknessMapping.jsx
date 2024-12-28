import React, { useState } from 'react'

export default function ThicknessMapping(props) {
    const {options} = props;
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="p-2 border rounded-lg font-barlow text-lg">
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
                {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}
