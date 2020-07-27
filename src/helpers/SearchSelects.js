import React from "react";
import { InputLabel, Select, FormControl, MenuItem } from "@material-ui/core";
export default function SearchSelects({
  className,
  type,
  onChange,
  value,
  populate,
  disabled,
  loading,
}) {
  return (
    <FormControl variant="outlined" className={className} disabled={disabled}>
      <InputLabel id={`${type}-label`}>
        {loading ? "Loading..." : type.charAt(0).toUpperCase() + type.slice(1)}
      </InputLabel>
      <Select
        labelId={`${type}-label`}
        name={type}
        id={type}
        value={value}
        onChange={onChange}
        label={type}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {populate.map((item, i) => {
          let option;
          if (type === "cohort") {
            option = `${item.course} with ${item.cohort_lead} an finished on ${item.graduation} at campus: ${item.campus}`;
          } else if (type === "course") {
            option = item.title;
          } else {
            option = item.name;
          }
          return (
            <MenuItem value={item.id} key={item.id * i}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

// `${item.course} with ${item.cohort_lead} an finished on ${item.graduation} at campus: ${item.campus}`
