import { AllProducts } from "../components";
import { client } from "../lib/client";

const kids = ({ AllKidsProducts }) => {
  return (
    <div className="Allproducts-container">
      {AllKidsProducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Kids"]';
  const AllKidsProducts = await client.fetch(query);

  return {
    props: { AllKidsProducts },
  };
};

export default kids;
