import { client } from '../core/profile';

const fetchProduct = async () => {
    const products: any = await client.product.fetchAll();
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  };

export { client };
