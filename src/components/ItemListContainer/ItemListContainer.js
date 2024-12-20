import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getCategories, getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";

const ItemListContainer = ({ greeting }) => {
  const mensajeError = "No se pueden obtener los productos";
  const { categoryType } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useAsync(() => getProducts(categoryType), [categoryType], mensajeError);

  const { data: categories } = useAsync(
    () => getCategories(categoryType),
    [categoryType],
    ""
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#cd5c5c]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">
            Hay un error, comunicarse con el administrador.
          </span>
        </div>
      </div>
    );
  }

  const [category] =
    categories?.filter((cat) => cat.categoryId === categoryType) || [];

  const categoryData = category ? { ...category } : {};
  const categoryTitle = categoryData.categoryTitle;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {categoryType ? (
        <>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#cd5c5c] mb-2">
              {categoryTitle}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cd5c5c] to-[#cd5c5c] mx-auto rounded-full"></div>
          </div>
          <ItemList items={products} />
        </>
      ) : (
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#cd5c5c] mb-2">
              Todos los Cursos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cd5c5c] to-[#cd5c5c] mx-auto rounded-full"></div>
          </div>
          <ItemList items={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
