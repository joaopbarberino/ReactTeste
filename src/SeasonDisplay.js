import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
    // Se está entre mês 3 e mês 9
    if (month > 2 && month < 9) {
        // Se lat > 0 (hemisfério norte), retorna 'summer', se não, retorna 'winter'
        return lat > 0 ? 'summer' : 'winter';
    } else {
        // Se lat > 0 (hemisfério norte), retorna 'winter', se não, retorna 'summer'
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    //           season igual winter ?    retorna isso   se nao    retorna isso
    const text = season === 'winter' ? 'Burr, it is cold!' : 'Lets hit the beach!';
    const iconName = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;