import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Calendar() {
  const [startDate, setStartDate] = React.useState(dayjs());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DemoContainer components={["DatePicker"]}>
        <DemoItem label="Inicio">
          <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            minDate={dayjs()}
          />
        </DemoItem>
        <DemoItem label="Fim">
          <DatePicker value={dayjs()} minDate={startDate} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
