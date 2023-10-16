import { CardItem } from "@/components/CardItem";
import { stock } from "@/db/stock";

export default function Productos({ params }) {
  const { categoryId } = params;

  const filterStock = stock.filter((prod) => prod.category === categoryId);

  return (
    <>
      {filterStock.length === 0 ? (
        <h2>No existen {categoryId} por el momento...</h2>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
          {filterStock.map((prod) => (
            <li key={prod.id}>
              <CardItem prod={prod} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
