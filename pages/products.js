import { AllProducts } from "../components";
import { client } from "../lib/client";

const products = ({ Allproducts }) => {
  return (
    <div className="Allproducts-container">
      {Allproducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const Allproducts = await client.fetch(query);

  return {
    props: { Allproducts },
  };
};

export default products;
