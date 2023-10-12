type Props = {
  onClick: (e: any) => void;
  list: string[];
  selected: string;
};

export default function Aside({ onClick, list, selected }: Props) {
  console.log("list : " + list);
  return (
    <aside className="p-4 text-center">
      <h3 className="mb-2 border-b border-sky-500 text-lg font-bold">
        Category
      </h3>
      <ul>
        {list?.map((item, number) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              item === selected && "text-sky-500"
            }`}
            key={number}
          >
            <button onClick={() => onClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
