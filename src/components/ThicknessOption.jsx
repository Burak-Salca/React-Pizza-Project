import React, { useState } from 'react'
import ThicknessMapping from './ThicknessMapping'

export default function ThicknessOption(props) {
  const { thicknessError, setErrors, setSelectedThickness } = props;
  const ThicknessOptions = [
    {
        "value": "",
        "title": "-Hamur Kalınlığı Seç-",
        "selected": true,
        "disabled": true,
        "hidden": true,
    },
    {
        "value": "Süpper İnce",
        "title": "Süpper İnce Hamur",
        "selected": false,
        "disabled": false,
        "hidden": false,
    },
    {
        "value": "Klasik",
        "title": "Klasik Hamur",
        "selected": false,
        "disabled": false,
        "hidden": false,
    },
    {
        "value": "Kalın",
        "title": "Kalın Hamur",
        "selected": false,
        "disabled": false,
        "hidden": false,
    },
  ]

  const handleSelect = (value) => {
    setSelectedThickness(value);
    if (value) {
      setErrors((prev) => ({ ...prev, thicknessError: false }));  
    }
  };

  return (
    <div className="flex flex-col gap-4 font-barlow"> 
      <h2 className="font-bold text-lg text-[20px]">Hamur Seç</h2>
        <ThicknessMapping 
        options={ThicknessOptions}
        handleSelect={handleSelect}
        thicknessError={thicknessError}
        /> 
    </div>
  )
}
