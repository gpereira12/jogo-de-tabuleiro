import React from 'react';
import ColorPicker from 'material-ui-color-picker';

const MuiColorPicker = ({ color, setColor, bgcolor, setBgcolor }) => {
    return (
        <>
            <ColorPicker 
                name="color"
                type="text"
                label="Cor da casa de Início e Fim"
                defaultValue={color}
                value={color}
                style={{ width: '220px', marginLeft: '12px', marginRight: '22px' }}
                onChange={color => setColor(color)}
            />
            <ColorPicker
                name="bgcolor"
                type="text"
                label="Cor do fundo"
                defaultValue={bgcolor}
                value={bgcolor}
                style={{ width: '220px', marginLeft: '12px', marginRight: '22px' }}
                onChange={color => setBgcolor(color)}
            />
        </>
    );
};

export default MuiColorPicker;