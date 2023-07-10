import AsyncSelect from "./AsyncSelect.tsx";
import Input from "./Input";
import Select from "./Select";

const FormikControl = (props: { [x: string]: any; }) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "async-select":
      return <AsyncSelect {...rest} />;
    default:
      return <></>;
  }
};

export default FormikControl;
