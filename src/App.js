import React, { useState, useRef, useCallback } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

import { Button, LinearProgress, Divider } from '@material-ui/core';

import Form from './componentes/MuiForm';
import BoardGame from './componentes/BoardGame';
import MuiDropzone from './componentes/MuiDropzone';
import MuiColorPicker from './componentes/MuiColorPicker';

import './App.css';

const App = () => {
  const componentRef = useRef();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ disableButton, setDisableButton ] = useState(false);
  const [ housesText, setHousesText ] = useState([]);
  const [ housesQuantity, setHousesQuantity ] = useState(5);
  const [fileObjects, setFileObjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [ color, setColor ] = useState('#311403');
  const [ bgcolor, setBgcolor ] = useState('#ecdfad');

  const createBoardGame = useCallback(() => {
    setIsSubmitting(true);

    setTimeout(() => {
      exportComponentAsJPEG(componentRef, 'Jogo Tabuleiro');
      setIsSubmitting(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Form 
        housesQuantity={housesQuantity} 
        setHousesQuantity={setHousesQuantity} 
        housesText={housesText} 
        setHousesText={setHousesText}
        setDisableButton={setDisableButton}
        fileObjects={fileObjects}
        setFileObjects={setFileObjects}
        open={open}
        setOpen={setOpen}
      />
      {isSubmitting && <LinearProgress />}
      <MuiColorPicker 
        color={color}
        setColor={setColor}
        bgcolor={bgcolor}
        setBgcolor={setBgcolor}
      />
      <MuiDropzone 
        open={open} 
        setOpen={setOpen} 
        fileObjects={fileObjects}
        setFileObjects={setFileObjects}
      />
      <Divider style={{margin: '32px 12px'}}/>
      <Button
        variant="contained"
        color="primary"
        disabled={isSubmitting || disableButton}
        onClick={createBoardGame}
        style={{ marginLeft: '12px' }}
      >
        {isSubmitting ? 'Gerando tabuleiro...' : 'Gerar Tabuleiro'}
      </Button>
      <BoardGame 
        ref={componentRef}
        fileObjects={fileObjects}
        color={color}
        bgcolor={bgcolor}
        housesText={housesText} 
        setHousesText={setHousesText}
        housesQuantity={housesQuantity} 
        setHousesQuantity={setHousesQuantity} 
      />
    </div>
  );
}

export default App;
