import { useQuery } from "react-query";
import Select from "./Select";

const AsyncSelect = (props: any) => {
  const { queryFunc, queryKey, ...rest } = props;
  const { data, isError, isLoading } = useQuery(queryKey, queryFunc);

  if (isError) {
    <div>Couldn't fetch {props.name} </div>;
  }

  return <Select disabled={isLoading || isError} options={data} {...rest} />;
};

export default AsyncSelect;
