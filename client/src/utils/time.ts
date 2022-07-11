import moment, {duration} from 'moment'
import React from 'react';

type IProps = {
    value: string;
    setState: () => void;
}

export const setTime = ({value, setState}: IProps) => {
    const futureDate = moment(value);

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const minutes = clockDuration.minutes();
    const seconds = clockDuration.seconds();
}