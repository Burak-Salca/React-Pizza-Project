import React, { useEffect, useState } from 'react'

export default function ThicknessMapping(props) {
    const {options, handleSelect, thicknessError} = props;
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        handleSelect(selectedValue);
      };

      useEffect(() => {
        if (!thicknessError) {
          setSelectedOption("");
        }
      }, [thicknessError]);

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
      {thicknessError && (
        <p className="text-red text-sm mt-2">Kalınlık seçmelisiniz!</p>
      )}
    </div>
  )
}
