import { DayPicker } from 'react-day-picker';

import './DatePicker.scss';

interface DatePickerProps {
    onChange: (value: string) => void;
    value: string;
    position: 'left' | 'right';
}
 
const DatePicker: React.FC<DatePickerProps> = ({
    onChange, value, position
}) => {
    return (
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      );
}
 
export default DatePicker;