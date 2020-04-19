import React, { useState } from 'react';
import ruLocale from "date-fns/locale/ru";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';

const DatePickerInput = (props) => {
    const[date, setDate] = useState(new Date())

    const onChangeHandler = (date) => {
        setDate(date);
        props.onChange(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <DatePicker 
                value={date} 
                onChange={onChangeHandler} 
                format="MM/yy" 
                disablePast 
                views={['year', 'month']}
                required
            />
        </MuiPickersUtilsProvider>
    )
}

DatePickerInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default DatePickerInput;