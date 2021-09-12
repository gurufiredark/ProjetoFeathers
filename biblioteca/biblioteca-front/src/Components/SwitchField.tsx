import { FormControlLabel, Switch } from "@material-ui/core";

function SwitchField(props: any) {
  const input = props.input;
  const label = props.label;
  return (
    <FormControlLabel
      control={
        <Switch
          checked={input.value}
          onChange={(event: any) => input.onChange(event.target.checked)}
        />
      }
      label={label}
    />
  );
}

export default SwitchField;
