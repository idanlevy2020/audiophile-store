import "./ProductImages.css";

function ProductImages(product) {
   // const nameFolder;

   // switch (product.name) {
   //    case "XX99 Mark I Headphone":
   //       nameFolder = "product-xx99-mark-one-headphones";
   //      break;
   //    case 1:
   //      day = "Monday";
   //      break;
   //  }


   return (
      <div className="ProductImages">
         <img
            src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
            alt={product.name}
         />
         <img
            src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
            alt={product.name}
         />
         <img
            src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
            alt={product.name}
         />
      </div>
   );
}

export default ProductImages;
