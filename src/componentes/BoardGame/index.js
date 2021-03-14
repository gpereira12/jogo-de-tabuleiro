import React, { useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';

import { numberClass } from '../../utils';
import './style.css';

const BoardGame = React.forwardRef(({ housesText, housesQuantity }, ref) => {
    const [ housesContent, setHousesContent ] = useState(Object.values(housesText));
    
    useEffect(() => {
        setHousesContent(Object.values(housesText));
    }, [housesText]);

    const renderHouses = useMemo(() => {
        let boardHouses = [];

        for (let index = 0; index < housesQuantity; index++) {
            if(housesQuantity < 5 || housesQuantity > 30) return;
            boardHouses.push({
                id: `${index+1}`,
                content: housesContent[index]
            })
        }

        return (
            <>
                {boardHouses.map((house, index) => (
                    <div className='house' key={house.id}>
                        <p style={{fontSize: `${housesContent[index]?.length > 3 ? 12 : 26}px`, margin: '12px 4px'}}>
                            {house.content}
                        </p>
                    </div>
                ))}
            </>
        );
    }, [housesContent, housesQuantity]);

    return (
        <div className="wrapper">
            <div  ref={ref} className={classNames("board-game", numberClass(housesQuantity))}>
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