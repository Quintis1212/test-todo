import ListItem from "./ListItem";
import React, { useEffect } from "react";

type listWrapperProps = {
  dataForRerender: Array<any>;
};

function ListWrapper(props: listWrapperProps) {
  const [items, setItems] = React.useState<Array<string>>([]);
  const [keys, setKeys] = React.useState<Array<string>>([]);
  const [newRender, setNewRender] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    const data: Array<string> = [];
    const dataKeys: Array<string> = [];

    for (const key in localStorage) {
      dataKeys.push(key);
      const item: string | null = localStorage.getItem(key);
      if (item) {
        data.push(item);
      }
    }
    setItems(data);
    setKeys(dataKeys);
    setIsLoaded(true);
  }, [newRender, props.dataForRerender]);
  return (
    <div className="list-item-wrapper">
      {isLoaded &&
        items.map((item, i) => {
          const currentKey = keys[i];
          return (
            <ListItem
              key={currentKey}
              item={item}
              currentKey={currentKey}
              setNewRender={setNewRender}
            />
          );
        })}
    </div>
  );
}

export default ListWrapper;
