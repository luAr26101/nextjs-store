import { CardSignInButton } from "@/components/form/buttons";
import FavoriteToggleForm from "@/components/products/favorite-toggle-form";
import { fetchFavoriteId } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = auth();

  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm productId={productId} favoriteId={favoriteId} />;
}

export default FavoriteToggleButton;
