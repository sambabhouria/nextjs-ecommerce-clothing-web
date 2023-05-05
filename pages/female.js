import { AllProducts } from "../components";
import { client } from "../lib/client";

const female = ({ AllFemaleProducts }) => {
  return (
    <div className="Allproducts-container">
      {AllFemaleProducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[category == "Female"]';
  const AllFemaleProducts = await client.fetch(query);

  return {
    props: { AllFemaleProducts },
  };
};

export default female;
