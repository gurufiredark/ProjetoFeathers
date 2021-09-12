import { TextField as TextInput } from "@material-ui/core";

function TextField(props: any) {
  const input = props.input;
  const label = props.label;
  return (
    <TextInput
      fullWidth
      label={label}
      value={input.value}
      onChange={(event: any) => input.onChange(event.target.value)}
    />
  );
}

export default TextField;
