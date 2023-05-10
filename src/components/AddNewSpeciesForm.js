import { useState, useEffect, useCallback } from "react";
function AddNewSpeciesForm(props){

  let title = props.title;
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [co2, setCo2] = useState('');
  const [lux, setLux] = useState('');
  
  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleHumidityChange = (event) => {
    setHumidity(event.target.value);
  };

  const handleCo2Change = (event) => {
    setCo2(event.target.value);
  };

  const handleLightChange = (event) => {
    setLux(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTemperature('');
    setHumidity('');
    setCo2('');
    setLux('');
  }
  return (
      <div className="bomb">
          <h2 className="ultra text-dark">{title}</h2>
          <label>
              Temperature:
              <input
                type="number"
                id="temperature"
                value={temperature}
                onChange={handleTemperatureChange}
              />
            </label>
            <label>
              Humidity:
              <input
                type="number"
                id="humidity"
                value={humidity}
                onChange={handleHumidityChange}
              />
            </label>
            <label>
              CO2:
              <input
                type="number"
                id="co2"
                value={co2}
                onChange={handleCo2Change}
              />
            </label>
            <label>
              Light:
              <input
                type="number"
                id="lux"
                value={lux}
                onChange={handleLightChange}
              />
            </label>
      </div>)

}

export default AddNewSpeciesForm;