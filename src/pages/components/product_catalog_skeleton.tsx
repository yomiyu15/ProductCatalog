import { Container, Grid, Skeleton } from "@mui/material";
import ProductCardSkeleton from "@/pages/components/product_card_skeleton";

const ProductCatalogSkeleton = () => {
  return (
    <Container data-testid="loading-skeleton">
      <Skeleton variant="rectangular" height={56} animation="wave" />

      <Skeleton
        sx={{ marginTop: "10px" }}
        variant="rectangular"
        width={320}
        height={56}
        animation="wave"
      />

      <Grid container spacing={3} mt={1}>
        {Array.from(new Array(6)).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCatalogSkeleton;
