// useRouter for dynamic routing

import Link from "next/link";
import { useRouter } from "next/router";
const CoffeeStore = () => {
  const router = useRouter();
  // console.log("Route: ", router.query.id);
  return (
    <div>
      Coffee Store Showing Page
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CoffeeStore;
