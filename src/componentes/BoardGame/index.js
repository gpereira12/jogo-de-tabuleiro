import React, { useMemo } from 'react';
import classNames from 'classnames';

import { numberClass } from '../../utils';
import './style.css';

const BoardGame = React.forwardRef(({ housesText, housesQuantity, fileObjects }, ref) => {
    console.log(fileObjects)
    const renderHouses = useMemo(() => {
        let boardHouses = [];

        for (let index = 0; index < housesQuantity; index++) {
            if(housesQuantity < 5 || housesQuantity > 30) return;
            boardHouses.push({
                id: `${index+1}`,
                content: housesText[`house-${index+1}`]
            })
        }

        return (
            <>
                {boardHouses.map((house, index) => (
                    <div className='house' key={house.id}>
                        <p style={{fontSize: `${housesText[`house-${index+1}`]?.length > 3 ? 12 : 26}px`, margin: '12px 4px'}}>
                            {house.content}
                        </p>
                    </div>
                ))}
            </>
        );
    }, [housesQuantity, housesText]);

    return (
        <div className="wrapper">
            <div 
                ref={ref} 
                className={classNames("board-game", numberClass(housesQuantity))}
                style={{backgroundImage: fileObjects.length && `linear-gradient(115deg, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)), url(${fileObjects[0].data})`}}
            >
                <div className={classNames("container-wrapper", numberClass(housesQuantity))}>
                <div id="start" className="start-finish-wrapper">
                    <p>Início</p>
                </div>
                <div id="content">
                    {renderHouses}
                </div>
                <div id="end" className="start-finish-wrapper">
                    <p>Fim</p>
                </div>
                </div>
            </div>
        </div>
    )
});

export default BoardGame;