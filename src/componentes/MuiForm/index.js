import React, { useState, useCallback, useMemo } from 'react';
import { TextField } from '@material-ui/core';

import './style.css';

function MuiForm({ 
  housesText, 
  setHousesText, 
  housesQuantity, 
  setHousesQuantity, 
  setDisableButton
}) {

  const [ error, setError ] = useState(false);
  const [ helperText, setHelperText ] = useState("Digite o número de casas que deseja criar o jogo");

  const housesQuantityHandler = useCallback((event) => {
    const housesQuantity = event.target.value;
    if(housesQuantity < 0) return;
    
    setHousesQuantity(housesQuantity);

    if(housesQuantity < 5) {
      setHelperText("Precisa ter no mínimo 5 casas");
      setDisableButton(true);
      setError(true);
    } else if(housesQuantity > 30) {
      setHelperText("Precisa ter no máximo 30 casas");
      setDisableButton(true);
      setError(true);
      return;
    } else {
      setError(false);
      setHelperText("Digite o número de casas que deseja criar o jogo");
      setDisableButton(false);
    }

  }, [setDisableButton, setHousesQuantity]);

  const handleHouseText = useCallback((event) => {
    const input = event.target;
    const value = input.value;

    if(value.length > 55) {
      return
    }
    let housesName = input.name;
    let housesTemp = housesText;
    
    housesTemp[housesName] = value;

    setHousesText({...housesTemp, [input.name]: value});
  }, [housesText, setHousesText]);

  const renderInputHouses = useMemo(() => {
    let inputHouses = [];
    for (let index = 0; index < housesQuantity; index++) {
      if(housesQuantity < 5 || housesQuantity > 30) return;

      inputHouses.push({
        name: `house-${index+1}`,
        label: `Casa ${index+1}`,
      })
    }

    return (
      <div className="inputGroup">
        {inputHouses.map(input => (
          <TextField
            key={input.name}
            name={input.name}
            type="text"
            label={input.label}
            onChange={handleHouseText}
            style={{marginLeft: '12px'}}
          />
        ))}
      </div>
    );
    
  }, [handleHouseText, housesQuantity]);

  return (
    <div className="form-group">
      <TextField
        name="housesQuantity"
        type="number"
        label="Número de casas"
        helperText={helperText}
        error={error}
        value={housesQuantity}
        onChange={housesQuantityHandler}
        style={{width: '150px', marginLeft: '12px', marginBottom: '22px'}}
      />
      {renderInputHouses}
    </div>
  );
}
export default MuiForm;